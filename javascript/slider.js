const slider = document.querySelector(".slider");
let sliderSection = document.querySelectorAll(".slider-item");
let sliderSectionLast = sliderSection[sliderSection.length-1]

const btnLeft = document.querySelector("#btn-left")
const btnRight = document.querySelector("#btn-right")

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

const irDerecha = () => {
    let sliderSectionFirst = document.querySelectorAll(".slider-item")[0];

    slider.style.marginLeft = "-300%";
    slider.style.transition = "all 0.5s";

    setTimeout(() =>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-200%";
    },501);
}
btnRight.addEventListener("click", () => irDerecha());

const irIzquierda = () => {
    sliderSection = document.querySelectorAll(".slider-item");
    sliderSectionLast = sliderSection[sliderSection.length-1]

    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.5s";
    
    setTimeout(() =>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-200%";
    },501);
}
btnLeft.addEventListener("click", () => irIzquierda());