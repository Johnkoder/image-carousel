export default class CarouselLogic {
  constructor(imageList = []) {
    this.imageList = imageList;
    this.selected = 0;
  }

  next() {
    this.selected++;
    if (this.selected >= this.imageList.length) {
      this.selected = 0;
      return this.selected;
    }
    return this.selected;
  }

  previous() {
    this.selected--;
    if (this.selected < 0) {
      this.selected = this.imageList.length - 1;
      return this.selected;
    }
    return this.selected;
  }
}
