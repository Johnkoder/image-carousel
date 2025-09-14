import './styles/carousel.css';
import CarouselLogic from './CarouselLogic.js';

export default class Carousel {
  constructor(imageList) {
    this.logic = CarouselLogic(imageList);
    this.carouselCont = document.querySelector('.carousel-cont');
    this.previousBtn = this.carouselCont.querySelector('.previous-btn');
    this.nextBtn = this.carouselCont.querySelector('.next-btn');
    this.carouseFrame = this.carouselCont.querySelector('.carousel-frame');
  }

  init() {
    //this.handleEvents('click', this.previousBtn, this.foo);
  }

  handlePreviousBtn() {
    return;
  }

  handleNextBtn() {
    return;
  }

  // helper
  handleEvents(type, el, callback) {
    el.addEventListener(type, () => {
      callback();
    });
  }
}
