import { state } from '../../App';
import {getCurrentAccount} from '../../eth-files/web3';
import CryptoJS from 'crypto-js';
import storedocument from '../../eth-files/storedocument';

class DataInput{
    constructor(doc, aut, ipf, dat, isAv){
        this.documentName = doc;
        this.author = aut;
        this.date = dat;
        this.ipfs = ipf;
        this.isAvailable = isAv;
    }
}

export const txData = [];



function decryptTransactionData(data) {
    let bytes = CryptoJS.AES.decrypt(data, state.p_key);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export async function getTransactionData(event){

    //Need work for the logs instead of storing the value on the smart contract
    if(event!==undefined)
        event.preventDefault();


    if(state.eth_events.length == 0 || getCurrentAccount() != state.currentAccount){
        if(!await getTransactionLogs()){
            return
        }
    } 
    
    else{
        return
    }
    
    //Settear el valor maximo de la pagina que se puede alcanzar 

    let maxPage = Math.floor(state.eth_events.length / 3);
    let remainder = state.eth_events.length % 3;

    if(remainder != 0){
        //Si el resto es mayor que uno hay que incrementar para una pagina mas.
        maxPage++;
    }

    state.maxPageValue = maxPage;

    let start = ((state.pageValue == 1) ? 0 : (state.pageValue-1) * 3);
    let eventsSlice = state.eth_events.slice(start, start + 3);
    
    
    for(let i = 0; i < 3; i++){
        if(eventsSlice[i] !== undefined){
            let hashData = eventsSlice[i].hash;
            let decryptData = decryptTransactionData(hashData);
            let arrayData = decryptData.split('...');
            txData[i] = new DataInput(arrayData[0], 'Author: ' + arrayData[1], 'https://dweb.link/ipfs/' + arrayData[2], 'Date: ' + arrayData[3], true);
        }

        else{
            txData[i] = new DataInput('', '', '', '', false);
        }

    } 
}

async function getTransactionLogs (event) {
        
    if(event)
        event.preventDefault();

    const account = await getCurrentAccount();
    if( account != state.currentAccount){
        state.currentAccount = account;
    }

    const evArray = [];

    if(account == state.auditAccount[0].toLocaleLowerCase()){
        await storedocument.getPastEvents('RegisterHash', {fromBlock: 0, toBlock: 'latest'})
        .then(function(events){
            events.forEach(ev => {
                evArray.push({owner: ev.returnValues.owner, hash: ev.returnValues._hash});
            });
        });
    }

    else{
        await storedocument.getPastEvents('RegisterHash', {filter: {owner: account}, fromBlock: 0, toBlock: 'latest'})
        .then(function(events){
            events.forEach(ev => {
                evArray.push({owner: ev.returnValues.owner, hash: ev.returnValues._hash});
            });
        });
    }
    

    state.eth_events = evArray;

    if (state.eth_events.length == 0){
        txData.length = 0;
        txData[0] = new DataInput("No transactions found on this account.", '', '', '', true);
        txData[1] = new DataInput('', '', '', '', false);
        txData[2] = new DataInput('', '', '', '', false);
        state.hashedData = '';
        state.decryptedData = '';
        return false;
    }
    
    return true;
    
}