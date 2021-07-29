import React ,{useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavButton, NavButtonLink} from './NavbarElements'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({isOpen, toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);
    //const [mainPage, setMainPage] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else{
            setScrollNav(false);
        }
    };

   //const isMainPage = () => {
   //    if(window.location.pathname=='/'){
   //        setMainPage(true);
   //    }
   //    else{
   //        setMainPage(false);
   //    }
   //}

    useEffect(()=> {
        window.addEventListener('scroll', changeNav);
        //window.addEventListener('', isMainPage)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: 'white'}}>
            <Nav scrollNav={scrollNav} /*mainPage={mainPage}*/>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}> ethNotary </NavLogo>
                    <MobileIcon isOpen={isOpen} onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='install' smooth={true} duration={500} spy={true} exact={true} offset={-79}>Install</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='upload' smooth={true} duration={500} spy={true} exact={true} offset={-79}>Upload</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact={true} offset={-79}>Features</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='wallet' smooth={true} duration={500} spy={true} exact={true} offset={-79}>Wallet</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavButtonLink to="/signin">Upload</NavButtonLink>
                    </NavButton>
                    
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar
