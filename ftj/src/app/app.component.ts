/*
Import statement tells what modules will be loaded and used in component.
We load only what we need.
No path or directory, but identifier prefixed with '@angular'.
*/
import { Component }from '@angular/core';

/*
Decorator for component, placed directly above the class definition, identified by '@'.
Property called 'selector', tells Angular to inject this component into '<my-app>' tag.
Property called 'template', identifies the HTML markup for component.
Back ticks render the template string over multiple lines.
Also 'templateUrl' property can point to a separate file.
*/
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
/*
The class run our component.
Properties reflect values from the design part, typed in TypeScript.
Methods contain the operations that component will support.
'constructor()' will run when an instance of component is first created.
'verifyTheTry()' updates the 'hinting' and 'howManyTries' properties, called from 'view'.
*/
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
    this.jewels = ['ruby','diamond','agate','amber','aquamarine','amethyst','opal','tourmaline', 'emerald','onyx','pearl','sapphire'];
    this.howManyTries = 0;

    // EXERCISE 1:
    // - What if we add new jewel to jewels? fix it!
    //
    // EXERCISE 2:
    // - Move the component's view template into a separated file and link it to the component

    let jewelIndex = Math.floor((Math.random() * 12) + 1);
    this.origJewel = this.jewels[jewelIndex];
      // console.log(this.origJewel);
    this.findJewel = null;
    this.hinting = null;
  }
  verifyTheTry() {
    this.hinting = (this.origJewel === this.findJewel);
    this.howManyTries = this.howManyTries + 1;
  }
}
