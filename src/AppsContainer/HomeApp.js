import React from 'react';
import Community from '../Components/Community/community';
import Features from '../Components/Features/Features';
import GetStart from '../Components/GetStart/GetStart';
import Home from '../Components/Home/Home';
import Journey from '../Components/Journey/Journey';
import Token from '../Components/Token/Token';

function HomeApp ()
{
  return (
    <>
      <Home />
      <Token />
      <Features />
      <Journey />
      <Community />
      <GetStart />
    </>
  );
}

export default HomeApp;