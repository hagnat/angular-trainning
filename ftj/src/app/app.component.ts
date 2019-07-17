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
  template: `
    <div class="container">
      <h2>Find the Jewel</h2>
      <p class="well lead">Find which Jewel computer likes more than the others.</p>
      <label>Your Try: </label>
      <input type="string" [value]="findJewel" (input)="findJewel = $event.target.value" />
      <button (click)="verifyTheTry()" class="btn btn-primary btn-sm">Verify</button>
      <button (click)="initGame()" class="btn btn-warning btn-sm">Restart</button>
      <div>
<!--
The asterisk * in front of 'structural directive' ngIf is a simplified syntax.
Angular expands into an HTML5 <template> tag.
-->
        <p *ngIf="hinting===false" class="alert alert-warning">Nope, not that one.. )-:</p>
        <p *ngIf="hinting===true" class="alert alert-success">Yes! That's it.</p>
      </div>
      <p class="text-info">No of tries :
        <span class="badge">{{howManyTries}}</span>
      </p>
    </div>
    `
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
