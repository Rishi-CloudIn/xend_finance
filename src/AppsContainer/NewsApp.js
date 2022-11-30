import React from 'react';
import Community from '../Components/Community/community';
import GetStart from '../Components/GetStart/GetStart';
import NewsCoverage from '../Components/NewAndAnnouncement/NewsCoverage/NewsCoverage';
import NewsHome from '../Components/NewAndAnnouncement/NewsHome/NewsHome';
import Navbar from '../Navbar/Navbar';

function NewsApp ()
{
  return (
    <>
      <Navbar />
      <NewsHome />
      <NewsCoverage />
      <Community />
      <GetStart />
    </>
  );
}

export default NewsApp;