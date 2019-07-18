import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-jewel',
  templateUrl: './new-jewel.component.html',
  styleUrls: ['./new-jewel.component.css']
})

export class NewJewelComponent implements OnInit {

    newJewel: string;

    @Input()
    jewels: string[];

    @Output()
    onClick: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.newJewel = '';
    }

    addJewel() {
        if (this.newJewel && !this.jewels.includes(this.newJewel)) {
            this.jewels.push(this.newJewel);
            this.initGame();
        }
    }
}
