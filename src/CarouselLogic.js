export default class CarouselLogic {
  constructor(imageList = []) {
    this.imageList = imageList;
    this.selected = 0;
  }

  getNextImg() {
    this.selected++;
    if (this.selected >= this.imageList.length) {
      this.selected = 0;
    }
    return this.imageList[this.selected];
  }

  getPreviousImg() {
    this.selected--;
    if (this.selected < 0) {
      this.selected = this.imageList.length - 1;
    }
    return this.imageList[this.selected];
  }
}
