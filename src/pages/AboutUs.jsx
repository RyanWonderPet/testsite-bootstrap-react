import React from 'react'
import MyTeam from "../components/Team/MyTeam";
import Description from '../components/Services/Description';
import Listofclient from '../components/Clients/Listofclient';
import AboutUs from '../components/About/AboutUs';
import AboutBreadCrumb from '../components/About/AboutBreadCrumb';

const AboutPage = () => {
  return (  
    <>
      <AboutBreadCrumb/>
      <Description/>
      <MyTeam/>
      <AboutUs/>
      <Listofclient/>
      </>
  )
}

export default AboutPage