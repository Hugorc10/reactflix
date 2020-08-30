import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="./">
        <img src="https://upload.wikimedia.org/wikipedia/pt/b/bd/Point_Blank_Logo.jpg" 
        height="100" alt="Logo Linux" />
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
