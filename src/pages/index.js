import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import MetamaskSection from '../components/InfoSection/MetamaskSection';
import RouteSection from '../components/InfoSection/RouteSection';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <ScrollToTop/>  
          <Sidebar isOpen ={isOpen} toggle={toggle}/>
          <Navbar  isOpen ={isOpen} toggle={toggle}/>  
          <HeroSection />
          <MetamaskSection {...homeObjOne}/>
          <RouteSection {...homeObjTwo}/>
          <Services id={'services'}/>
          <RouteSection {...homeObjThree}/>
          <Footer/>
        </>
    );
};

export default Home;
