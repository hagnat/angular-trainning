
import { Component }from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  hinting: boolean;
  howManyTries: number;
  origJewel: string;
  findJewel: string;
  jewels: string[];

  constructor() {
    this.initGame();
  }
  initGame() {
    this.jewels = [
      'ruby',
      'diamond',
      'agate',
      'amber',
      'aquamarine',
      'amethyst',
      'opal',
      'tourmaline',
      'emerald',
      'onyx',
      'pearl',
      'sapphire'
    ];
    this.howManyTries = 0;

    // EXERCISE 1:
    // - What if we add new jewel to jewels? fix it!

    let jewelIndex = Math.floor(Math.random() * this.jewels.length);
    this.origJewel = this.jewels[jewelIndex];
    console.log(this.origJewel);

    this.findJewel = null;
    this.hinting = null;
  }
  verifyTheTry() {
    this.hinting = (this.origJewel === this.findJewel);
    this.howManyTries = this.howManyTries + 1;
  }
}
