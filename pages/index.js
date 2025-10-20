import About from '@/components/templates/Index/About';
import Services from '@/components/templates/Index/Services';
import Slider from '@/components/templates/Index/Slider';
import React from 'react';

function index() {
  return (
    <>
      <Slider />
      <About />
      <Services />
    </>
  );
}

export default index;
