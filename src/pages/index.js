import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from '../components/InfoSection/Data';
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
          <RouteSection {...homeObjThree}/>
          <RouteSection {...homeObjFour}/>
          
          
          <Footer/>
        </>
    );
};

// Services removed from bottom for style. <Services id={'services'}/>

export default Home;
