
import {getCurrentAccount} from '../../eth-files/web3';
import ipfs from '../../eth-files/ipfs';
import storedocument from '../../eth-files/storedocument';
import CryptoJS from 'crypto-js';
import { state } from '../../App';
import UploadDoc from './index';



async function convertToBuffer(reader){
    //file is converted to a buffer to prepare for uploading to IPFS
    const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
    
    state.buffer = buffer;
};

export function captureFile (event) {
    event.stopPropagation();
    event.preventDefault();

    if(event.target.files[0] != undefined){
        const file = event.target.files[0];
        let reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => convertToBuffer(reader);
        console.log("Captured file!");
    }
};

export async function submitDocument(event) {
    event.preventDefault();
    state.isSubmitted = true;
    //bring in user's metamask account address
    const account = await getCurrentAccount();
    if( account != state.currentAccount){
        state.currentAccount =account;
    }

    const ethAddress = storedocument.options.address;
    state.ethAddress = ethAddress;

    let _docName = await document.getElementById('doc-name-input').value;
    let _authorName = await document.getElementById('author-input').value;

    //save document to IPFS,return its hash#, and set hash# to state
    //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add 

    //https://dweb.link/ipfs/IPFSHASH
    const _docIpfsHash = await ipfs.add(state.buffer);
    let _ipfs = _docIpfsHash[0].hash
    state.ipfsHash = _ipfs;

    const metadata = _docName + "..." + _authorName + "..." + _ipfs + "..." + (new Date().toLocaleString());

    let hash = CryptoJS.AES.encrypt(metadata, state.p_key).toString();
    let estGas = await storedocument.methods.registerHash(hash).estimateGas();
    estGas = estGas.toString(16);
    

    const myData = storedocument.methods.registerHash(hash).encodeABI();
    const txParameters = {
        nonce: '0x00', // ignored by MetaMask
        gasPrice: '0x3B9ACA00', // customizable by user during MetaMask confirmation.
        gas: '0x' + estGas, // Gas Calculator
        to: ethAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        value: '0x00', // Only required to send ether to the recipient from the initiating external account.
        data: myData, //Smart Contract Method
        chainId: '0x3' //Ignored by Metamask
    };

    //Probar con call  https://stackoverflow.com/questions/56078385/someone-has-managed-to-get-the-balance-of-an-erc20-token-with-web3-js1-0-0
    //Infura no permite sendTransaction https://ethereum.stackexchange.com/questions/70853/the-method-eth-sendtransaction-does-not-exist-is-not-available-on-infura
    //Posible fix ---- https://ethereum.stackexchange.com/questions/95070/how-to-sign-a-transaction-and-send-data-to-infura-using-metamask

    const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [txParameters],
    });

    state.transactionHash = txHash;

    document.getElementById('transaction-hash').href += txHash;    
    let customEvent = new CustomEvent("changeSubmitted", { "detail": "Change the submit." });
    window.dispatchEvent(customEvent);
};


