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
  
  