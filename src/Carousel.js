import './styles/carousel.css';
import CarouselLogic from './CarouselLogic.js';

export default class Carousel {
  constructor(imageList) {
    this.logic = new CarouselLogic(imageList);
    this.carouselCont = document.querySelector('.carousel-cont');
    this.previousBtn = this.carouselCont.querySelector('.previous-btn');
    this.nextBtn = this.carouselCont.querySelector('.next-btn');
    this.carouselFrame = this.carouselCont.querySelector('.carousel-frame');
    this.carouselImg = this.carouselFrame.querySelector('.carousel-img');
  }

  init() {
    this.injectImageToFrame(this.logic.getInitialImg());
    this.handleEvent('click', this.previousBtn, this.handlePreviousBtn);
    this.handleEvent('click', this.nextBtn, this.handleNextBtn);
  }

  handlePreviousBtn = () => {
    const chosenImg = this.logic.getPreviousImg();
    this.injectImageToFrame(chosenImg);
  };

  handleNextBtn = () => {
    const chosenImg = this.logic.getNextImg();
    this.injectImageToFrame(chosenImg);
  };

  // helper
  handleEvent(type, el, callback) {
    el.addEventListener(type, () => {
      callback();
    });
  }

  injectImageToFrame(chosenImg) {
    this.carouselImg.src = chosenImg;
  }
}
