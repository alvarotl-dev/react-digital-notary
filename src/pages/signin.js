import React from 'react'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import { homeObjThree } from '../components/InfoSection/Data'
import Signin from '../components/Signin'
import ScrollToTop from '../components/ScrollToTop'

const SigninPage = () => {
    return (
        <div>
            <ScrollToTop/>
            <Signin/>
        </div>
    )
}

export default SigninPage
