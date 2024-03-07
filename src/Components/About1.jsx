import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function About1()
{
    return (
      <>
        <div className="container-fluid about1-section">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-6">
                <div className="row">
                  <div className="col-md-12 ">
                    <Tabs
                      defaultActiveKey="profile"
                      id="uncontrolled-tab-example"
                      className="mb-3 "
                    >
                      <Tab eventKey="home" title="What we do">
                        <div className="tab-fullcontent">
                        <h2 className="mb-4">We Offer High Quality Services</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                        </div>
                      </Tab>
                      <Tab eventKey="profile" title="Our mission">
                        <div className="tab-fullcontent">
                        <h2 className="mb-4">To Accomodate All Patients</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                        </div>
                      </Tab>
                      <Tab eventKey="contact" title="Our goal" >
                       <div className="tab-fullcontent">
                       <h2 className="mb-4">Help Our Customers Needs</h2>
                       <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p>
                       </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 about1-bg"></div>
            </div>
          </div>
        </div>
      </>
    );
}