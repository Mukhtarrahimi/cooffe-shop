import Slider from '@/components/templates/Index/Slider';
import React from 'react';
import About from '@/components/templates/Index/About';
import Services from '@/components/templates/Index/Services';
import Offer from '@/components/templates/Index/Offer';
import Menu from '@/components/templates/Index/Menu';
import Reservation from '@/components/templates/Index/reservation';
import Testimonials from '@/components/templates/Index/Testtimonials';

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
      <Testimonials data={data.comment} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch('http://localhost:4000/services');
  const servicesData = await servicesResponse.json();

  const menuResponse = await fetch('http://localhost:4000/menu');
  const menuData = await menuResponse.json();

  const commentResponse = await fetch('http://localhost:4000/comments');
  const commentData = await commentResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        comment: commentData,
      },
    },
    revalidate: 60 * 60 * 12, // Second
  };
}

export default Index;
