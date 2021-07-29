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
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>

                <SideButtonWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideButtonWrap>
            </SidebarWrapper>

        </SidebarContainer>

    )
}

export default Sidebar