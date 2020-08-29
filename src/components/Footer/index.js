import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import { LogoImage } from '../Menu/style.js';

function Footer() {
  return (
    <FooterBase>
      <a href="./">
        <LogoImage className="Logo" src={Logo} alt="Huflix logo" />
      </a>
      <p>
        Criado por
        {' '}
        <a href="./">
          Hugo Mafra
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
