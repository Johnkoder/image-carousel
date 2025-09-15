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

    this.navDots = this.carouselCont.querySelector('.nav-dots');
  }

  init() {
    this.injectImageToFrame(this.logic.getInitialImg());
    this.renderAllDots();
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

  renderAllDots() {
    this.logic.getImageList.forEach((_, i) => {
      const newDot = document.createElement('span');
      newDot.dataset.id = i;
      newDot.className = 'dot';
      this.handleEvent('click', newDot, this.handleDot);
      this.navDots.append(newDot);
    });
  }

  handleDot = () => {
    console.log('HI!');
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
