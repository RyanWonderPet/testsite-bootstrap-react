import React from "react";
import CarouselSlide from "../components/Home/CarouselSlide";
import Description from "../components/Services/Description";
import Services from "../components/Services/MyServices";
import Gallery from "../components/Portfolio/gallery";
import Listofclient from "../components/Clients/Listofclient";



const Home = () => {
  return (
    <container fluid>
        <CarouselSlide />
        <Description />
        <Services />
        <Gallery />
        <Listofclient />
    </container>
 
  )
}

export default Home