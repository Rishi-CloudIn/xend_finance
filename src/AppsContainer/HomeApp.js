import React from 'react';
import Community from '../Components/Community/community';
import Contact from '../Components/Contact/Contact';
import Features from '../Components/Features/Features';
import GetStart from '../Components/GetStart/GetStart';
import Home from '../Components/Home/Home';
import Journey from '../Components/Journey/Journey';
import Token from '../Components/Token/Token';
import Navbar from '../Navbar/Navbar';

function HomeApp ()
{
  return (
    <>
      <Navbar />
      <Home />
      <Token />
      <Features />
      <Journey />
      <Contact />
      <Community />
      <GetStart />
    </>
  );
}

export default HomeApp;