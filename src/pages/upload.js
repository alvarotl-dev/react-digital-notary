import React from 'react'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import { homeObjThree } from '../components/InfoSection/Data'
import Signin from '../components/Signin'
import UploadDoc from '../components/UploadDocument'
import ScrollToTop from '../components/ScrollToTop'

const UploadPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <UploadDoc/>
        </div>
    )
}

export default UploadPage