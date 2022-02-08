import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import Footer from '../Footer';

function Home({user}) {
  console.log(user)
  return (
    <>
      <HeroSection user={user}/>
      <InfoSection/>
      <Footer />
    </>
  );
}
export default Home;
