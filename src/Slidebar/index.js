import React from "react";
import { SidebarContainer, Icon, CloseIcon,SiderbarWrapper,
        SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute
    } from "./SidebarElements";

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SiderbarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SiderbarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
