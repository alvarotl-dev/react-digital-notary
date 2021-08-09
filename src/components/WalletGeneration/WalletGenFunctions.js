import { state } from '../../App';
import web3 from '../../eth-files/web3'

export function createEthAccount(event){
    event.preventDefault();
    
    const newAccount = web3.eth.accounts.create(document.getElementById('entropy-input').value);

    state.genWallet = newAccount.address;
    state.genWalletPKEY = newAccount.privateKey;

    let walletEvent = new CustomEvent("walletCreated", { "detail": "Wallet Created." });
    window.dispatchEvent(walletEvent);
}


