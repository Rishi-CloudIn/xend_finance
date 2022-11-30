import React from 'react';
import './Journey.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import H1 from './H1-2022';
import H2 from './H2-2022';
function Journey ()
{

  return (
    <>
      <div className='container journey-container mt-5'>
        <div className='journey-content-div'>
          <h1 className='journey-h1 text-center'>The Journey So Far And The Road To Come</h1>
          <p className='journey-p text-center'>Xend Finance has crossed many incredible milestones, with many more to come. Below is a detailed roadmap that lays out the past, the present, and a little sneak-peak into the future.</p>
          <div className='tab-view mt-5'>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="2022 - H1">
                <H1 />
              </Tab>
              <Tab eventKey="profile" title="2022 - H2">
                <H2 />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default Journey;