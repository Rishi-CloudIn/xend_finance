import React from 'react';
import Community from '../Components/Community/community';
import GetStart from '../Components/GetStart/GetStart';
import TechBbenefits from '../Components/TechnologyBusinessComponent/TechBbenefit/TechBbenefits';
import TechBHome from '../Components/TechnologyBusinessComponent/TechBHome/TechBHome';
import TechBSolution from '../Components/TechnologyBusinessComponent/TechBSolution/TechBsolution';


function TechBusApp ()
{
  return (
    <>
      <TechBHome />
      <TechBbenefits />
      <TechBSolution />
      <Community />
      <GetStart />
    </>
  );
}

export default TechBusApp;