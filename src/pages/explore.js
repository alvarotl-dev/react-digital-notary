import React from 'react'
import ExploreDocs from '../components/ExploreDocuments';
import ScrollToTop from '../components/ScrollToTop';
import { ethEnabled } from '../eth-files/web3';

const ExploreDocumentsPage = () => {
    const metamaskEnabled = ethEnabled(window);

    return (
        <>
            <ScrollToTop/>
            <ExploreDocs isEnabled={metamaskEnabled}/>
        </>
    )
}

export default ExploreDocumentsPage
