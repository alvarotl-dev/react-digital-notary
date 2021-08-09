import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import WalletGenPage from '../components/WalletGeneration';
import { ethEnabled } from '../eth-files/web3';

const GenerateWalletPage = () => {

    return (
        <>
            <ScrollToTop/>
            <WalletGenPage/>
        </>
    )
}

export default GenerateWalletPage