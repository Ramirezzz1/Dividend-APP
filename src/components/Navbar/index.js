import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn, NavBtnLink, NavLinks2} from './NavbarElement';
import { animateScroll as scroll} from 'react-scroll';
import SignupPage from '../../pages/signup';

const toggleHome= () => {
    scroll.scrollToTop();
};

const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>Div Coins</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offest={-80}>About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="discover"smooth={true} duration={500} spy={true} exact='true' offest={-80}>Discover</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="services"smooth={true} duration={500} spy={true} exact='true' offest={-80}>Services</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks2 to="/dashboard"smooth={true} duration={500} spy={true} exact='true' offest={-80}>Dashboard</NavLinks2>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/signin"smooth={true} duration={500} spy={true} exact='true' offest={-80}>Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar;
