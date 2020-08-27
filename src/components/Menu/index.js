import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper, ButtonLink } from './style.js'
import Button from '../Button';

function Menu () {
  return (
    <MenuWrapper className="Menu">
      <a href="/"> 
        <LogoImage className="Logo" src={Logo} alt="Huflix logo" />
      </a>

      <Button as="a" className="Button" href="/">
        Novo vídeo
      </Button>
    </MenuWrapper>  
  );
}

export default Menu;
