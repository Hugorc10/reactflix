import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      
      <BannerMain 
      />

      <Carousel
        ignoreFirstVideo
        category
      />

      <Carousel 
        cae
      />

      <Footer />



    </div>
  );
}

export default App;
