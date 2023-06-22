import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../img/plant1.jpg";
import img1 from "../../img/glass1.jpg";
import img2 from "../../img/light1.jpg";

import img3 from "../../img/light2.jpg";
import img4 from "../../img/plant2.jpg";
import img5 from "../../img/glass2.jpg";

import img6 from "../../img/glass3.jpg";
import img7 from "../../img/light3.jpg";
import img8 from "../../img/plant3.jpg";




function allBtn() {
  let plant = document.getElementsByClassName("plant");
  let glass = document.getElementsByClassName("glass");
  let light = document.getElementsByClassName("light");
 
  let all_btn_bg = document.getElementsByClassName("all_btn_bg")
  let plant_btn_bg = document.getElementsByClassName("plant_btn_bg")
  let glass_btn_bg = document.getElementsByClassName("glass_btn_bg")
  let light_btn_bg = document.getElementsByClassName("light_btn_bg")

  
  all_btn_bg[0].classList.add("bg-success", "text-white");
  plant_btn_bg[0].classList.remove("bg-success", "text-white");
  glass_btn_bg[0].classList.remove("bg-success", "text-white");
  light_btn_bg[0].classList.remove("bg-success", "text-white");

  
  for (let i = 0; i < plant.length; i++) {
      plant[i].classList.remove("d-none");
  }
  for (let i = 0; i < glass.length; i++) {
      glass[i].classList.remove("d-none");
  }
  for (let i = 0; i < light.length; i++) {
      light[i].classList.remove("d-none");
  }
}


function plantBtn() {
  let plant = document.getElementsByClassName("plant");
  let glass = document.getElementsByClassName("glass");
  let light = document.getElementsByClassName("light");
  
  let all_btn_bg = document.getElementsByClassName("all_btn_bg")
  let plant_btn_bg = document.getElementsByClassName("plant_btn_bg")
  let glass_btn_bg = document.getElementsByClassName("glass_btn_bg")
  let light_btn_bg = document.getElementsByClassName("light_btn_bg")


  all_btn_bg[0].classList.remove("bg-success", "text-white");
  plant_btn_bg[0].classList.add("bg-success", "text-white");
  glass_btn_bg[0].classList.remove("bg-success", "text-white");
  light_btn_bg[0].classList.remove("bg-success", "text-white");

  for (let i = 0; i < plant.length; i++) {
      plant[i].classList.remove("d-none");
      glass[i].classList.add("d-none");
      light[i].classList.add("d-none");
  }
}


function glassBtn() {
  let plant = document.getElementsByClassName("plant");
  let glass = document.getElementsByClassName("glass");
  let light = document.getElementsByClassName("light");
  
  let all_btn_bg = document.getElementsByClassName("all_btn_bg")
  let plant_btn_bg = document.getElementsByClassName("plant_btn_bg")
  let glass_btn_bg = document.getElementsByClassName("glass_btn_bg")
  let light_btn_bg = document.getElementsByClassName("light_btn_bg")

  all_btn_bg[0].classList.remove("bg-success", "text-white");
  plant_btn_bg[0].classList.remove("bg-success", "text-white");
  glass_btn_bg[0].classList.add("bg-success", "text-white");
  light_btn_bg[0].classList.remove("bg-success", "text-white");


  for (let i = 0; i < glass.length; i++) {
      glass[i].classList.remove("d-none");
      plant[i].classList.add("d-none");
      light[i].classList.add("d-none");
  }
}


function lightBtn() {
  let plant = document.getElementsByClassName("plant");
  let glass = document.getElementsByClassName("glass");
  let light = document.getElementsByClassName("light");
 
  let all_btn_bg = document.getElementsByClassName("all_btn_bg")
  let plant_btn_bg = document.getElementsByClassName("plant_btn_bg")
  let glass_btn_bg = document.getElementsByClassName("glass_btn_bg")
  let light_btn_bg = document.getElementsByClassName("light_btn_bg")


  all_btn_bg[0].classList.remove("bg-success", "text-white");
  plant_btn_bg[0].classList.remove("bg-success", "text-white");
  glass_btn_bg[0].classList.remove("bg-success", "text-white");
  light_btn_bg[0].classList.add("bg-success", "text-white");


  for (let i = 0; i < light.length; i++) {
      light[i].classList.remove("d-none");
      plant[i].classList.add("d-none");
      glass[i].classList.add("d-none");
  }
}




const Gallery = () => {
  return (
    <>

    

   <div className="pt-5 pb-5">
  <div className="d-flex justify-content-center pb-3">
    <button
      className="btn portfolio_btn bg-success text-white all_btn_bg"
      type="button"
      onclick="/allBtn()"
    >
      ALL
    </button>
    <button
      className="btn portfolio_btn plant_btn_bg"
      type="button"
      onclick="plantBtn()"
    >
      PLANT
    </button>
    <button
      className="btn portfolio_btn glass_btn_bg"
      type="button"
      onclick="glassBtn()"
    >
      GLASS
    </button>
    <button
      className="btn portfolio_btn light_btn_bg"
      type="button"
      onclick="lightBtn()"
    >
      LIGHT
    </button>
  </div>

  <div className="container d-flex img_container_div">
    <div className="img_column">
      
    <img src={img} className="img-fluid p-2 portfolio_img plant" alt="plant" />

    <img src={img1} className="img-fluid p-2 portfolio_img glass" alt="glass" />

    <img src={img2} className="img-fluid p-2 portfolio_img light" alt="light" />

    </div>
    <div className="img_column">

     <img src={img3} className="img-fluid p-2 portfolio_img light" alt="light" />

     <img src={img4} className="img-fluid p-2 portfolio_img plant" alt="plant" />

     <img src={img5} className="img-fluid p-2 portfolio_img glass" alt="glass" />

    </div>

    <div className="img_column">
    <img src={img6} className="img-fluid p-2 portfolio_img glass" alt="glass" />

    <img src={img7} className="img-fluid p-2 portfolio_img light" alt="light" />

    <img src={img8} className="img-fluid p-2 portfolio_img plant" alt="plant" />

    </div>
  </div>
</div>


  </>
  
  );
}

export default Gallery;
