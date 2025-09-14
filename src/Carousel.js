import './styles/carousel.css';
import CarouselLogic from './CarouselLogic.js';

export default class Carousel {
  constructor(imageList) {
    this.logic = new CarouselLogic(imageList);
    this.carouselCont = document.querySelector('.carousel-cont');
    this.previousBtn = this.carouselCont.querySelector('.previous-btn');
    this.nextBtn = this.carouselCont.querySelector('.next-btn');
    this.carouseFrame = this.carouselCont.querySelector('.carousel-frame');
  }

  init() {
    this.handleEvent('click', this.previousBtn, this.handlePreviousBtn);
    this.handleEvent('click', this.nextBtn, this.handleNextBtn);
  }

  handlePreviousBtn = () => {
    console.log(this.logic.previous());
  };

  handleNextBtn = () => {
    console.log(this.logic.next());
  };

  // helper
  handleEvent(type, el, callback) {
    el.addEventListener(type, () => {
      callback();
    });
  }
}
