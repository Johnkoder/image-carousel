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
    this.injectImageToFrame(
      this.logic.getImageList[this.logic.getInitialImgIdx()]
    );
    this.renderAllDots();
    this.handleEvent('click', this.previousBtn, this.handlePreviousBtn);
    this.handleEvent('click', this.nextBtn, this.handleNextBtn);
  }

  handlePreviousBtn = () => {
    const imageList = this.logic.getImageList;
    const idx = this.logic.getPreviousImgIdx();
    this.injectImageToFrame(imageList[idx]);
    this.renderAllDots();
  };

  handleNextBtn = () => {
    const imageList = this.logic.getImageList;
    const idx = this.logic.getNextImgIdx();
    this.injectImageToFrame(imageList[idx]);
    this.renderAllDots();
  };

  renderAllDots() {
    this.removeChildren(this.navDots);
    this.logic.getImageList.forEach((_, i) => {
      const newDot = document.createElement('span');
      newDot.dataset.id = i;
      newDot.className = 'dot';

      if (this.logic.getSelected === i) {
        newDot.classList.add('selected');
      }

      this.handleEvent('click', newDot, this.handleDot);
      this.navDots.append(newDot);
    });
  }

  handleDot = (e) => {
    const imageList = this.logic.getImageList;
    const idx = e.target.dataset.id;

    this.logic.setSelected = Number(idx);
    this.injectImageToFrame(imageList[idx]);
    this.renderAllDots();
  };

  // helper
  handleEvent(type, el, callback) {
    el.addEventListener(type, (e) => {
      callback(e);
    });
  }

  injectImageToFrame(chosenImg) {
    this.carouselImg.src = chosenImg;
  }

  removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.lastChild);
    }
  }
}
