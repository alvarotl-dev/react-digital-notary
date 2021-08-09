// //overrides metamask v0.2 for our 1.0 version.  
//1.0 lets us use async and await instead of promises

import Web3 from 'web3';
//Etherscan Address https://rinkeby.etherscan.io/address/0x4e74da1ddb2182a7ddfb8324d6c08577fc927eb9

const infuraEndpoint = "https://rinkeby.infura.io/v3/87d33b235b06421584ca2ce2d26ea056";
const web3 = new Web3(infuraEndpoint); //My Infura project rinkeby endpoint.

//overrides metamask v0.2 for our v 1.0
//const web3 = new Web3(window.web3.currentProvider);

export async function enableMetamask()
{
    if(window.ethereum) {   
        await window.ethereum.enable();
    }
}

export function ethEnabled(window){
    if(window.ethereum !== undefined){
            return true
    }
    else{
        return false;
    }
}

//Generic function for web3
export async function getCurrentAccount(event) {
    if(event)
        event.preventDefault();

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    return accounts[0];
}

export default web3;