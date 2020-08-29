import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper } from './style.js'
import Button from '../Button';
// import WatchButton from '../BannerMain/styles.js'

function Menu () {
  return (
    <MenuWrapper className="Menu">
      <a href="/"> 
        <LogoImage className="Logo" src={Logo} alt="Huflix logo" />
      </a>

      <Button as="a" href="/">
        Novo vídeo
      </Button>

      {/* <WatchButton as="a" href="https://youtu.be/KY_GKMHm4cE">
        Assistir
      </WatchButton> */}
    </MenuWrapper>
  );
}

export default Menu;
