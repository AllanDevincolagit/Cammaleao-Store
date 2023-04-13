import React from 'react';
import Menu from '../../components/Menu';
import Carousel from '../../components/Carrousel';
import PageDefault from '../../components/PageDefault';
import Footer from '../../components/Footer/Index';

function Home() {
  return (
    <>
      <Menu />
      <br /> 
      <Carousel />  <br />

      <PageDefault />

      <Footer />
   </>
  );
}




export default Home;
