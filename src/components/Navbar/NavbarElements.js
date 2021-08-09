import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav  ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.5s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Ubuntu';
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        opacity: ${({ isOpen }) => (isOpen ? '0%' : '100%')};
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Trebuchet MS';

    &.active{
        border-bottom: 5px solid #2D68BD;
    }

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #2D68BD;
    }
`;

export const NavButton = styled.nav`
    display: flex;
    align-items: center;


    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavButtonLink = styled(LinkR)`
    
    border-radius: 50px;
    background: #1C50D3;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Trebuchet MS';

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;