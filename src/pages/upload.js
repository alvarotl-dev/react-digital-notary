import React from 'react'
import UploadDoc from '../components/UploadDocument'
import ScrollToTop from '../components/ScrollToTop'
import { ethEnabled } from '../eth-files/web3'

const UploadPage = () => {
    const metamaskEnabled = ethEnabled(window);

    return (
        <div>
            <ScrollToTop/>
            <UploadDoc isEnabled={metamaskEnabled}/>
        </div>
    )
}

export default UploadPage