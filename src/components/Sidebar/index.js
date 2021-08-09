import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideButtonWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="install" onClick={toggle}>Install</SidebarLink>
                    <SidebarLink to="upload" onClick={toggle}>Upload</SidebarLink>
                    <SidebarLink to="wallet" onClick={toggle}>Wallet</SidebarLink>
                    <SidebarLink to="explore" onClick={toggle}>Explore</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Features</SidebarLink>
                </SidebarMenu>

                <SideButtonWrap>
                    <SidebarRoute to="/upload">Upload Now</SidebarRoute>
                </SideButtonWrap>
            </SidebarWrapper>

        </SidebarContainer>

    )
}

export default Sidebar