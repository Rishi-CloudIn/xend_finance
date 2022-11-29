import React from 'react';
import Community from '../Components/Community/community';
import GetStart from '../Components/GetStart/GetStart';
import TechTHome from '../Components/TechnologyTokenComponent/TechTHome/TechTHome';
import TechTStatistic from '../Components/TechnologyTokenComponent/TechTStatistic/TechTstatistic';


function TechTokenApp ()
{
  return (
    <>
      <TechTHome />
      <TechTStatistic />
      <Community />
      <GetStart />
    </>
  );
}

export default TechTokenApp;