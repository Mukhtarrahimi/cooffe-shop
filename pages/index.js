import About from '@/components/templates/Index/About';
import Services from '@/components/templates/Index/Services';
import Slider from '@/components/templates/Index/Slider';
import React from 'react';

function index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/services');
  const services = await res.json();
  return {
    props: {
      data: {
        services,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default index;
