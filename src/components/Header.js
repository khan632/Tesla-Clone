/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import styled from 'styled-components'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const [hamBurger, setHamBurger] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu className='menuItem'>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </Menu>
      <RightMenu>
        <div className='rightMenuItems'>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        </div>
        <CustomMenu onClick={() => setHamBurger(true)}/>
      </RightMenu>
      <BurgerMenu show={hamBurger}>
        <CloseWrapper>
          <CustomClose onClick={() => setHamBurger(false)}/>
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relation</a></li>
      </BurgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 3rem; 
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

    a{
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 1rem;
      flex-wrap: nowrap;
    }

    @media(max-width: 768px){
      display: none;
    }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

    a{
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 1rem;
    }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  background: white;

  width: 256px;
  z-index: 16;
  padding: 20px;

  list-style: none;

  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.25s ease-in-out;

    li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a{
          font-weight: 600;
        }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`