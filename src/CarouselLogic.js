export default class CarouselLogic {
  constructor(imageList = []) {
    this.imageList = imageList;
    this.selected = 0;
  }

  set setSelected(selected) {
    this.selected = selected;
  }

  get getImageList() {
    return this.imageList;
  }

  get getSelected() {
    return this.selected;
  }

  getNextImgIdx() {
    this.selected++;
    if (this.selected >= this.imageList.length) {
      this.selected = 0;
    }
    return this.selected;
  }

  getPreviousImgIdx() {
    this.selected--;
    if (this.selected < 0) {
      this.selected = this.imageList.length - 1;
    }
    return this.selected;
  }

  getInitialImgIdx() {
    return 0;
  }
  //TODO: do this
  getChosenImgIdx() {
    return;
  }
}
