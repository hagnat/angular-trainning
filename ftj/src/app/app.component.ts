
import { Component }from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    hinting: boolean;
    howManyTries: number;
    origJewel: string;
    findJewel: string;
    jewels: string[];

    constructor() {
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
        ].sort();

        this.initGame();
    }

    initGame() {
        this.randomizeJewel();

        this.howManyTries = 0;
        this.findJewel = null;
        this.hinting = null;
    }

    private randomizeJewel() {
        let jewelIndex = Math.floor(Math.random() * this.jewels.length);
        this.origJewel = this.jewels[jewelIndex];
        console.log(this.origJewel);
    }

    tryJewel(jewel) {
        this.hinting = (this.origJewel === jewel);
        this.howManyTries = this.howManyTries + 1;
    }

    verifyTheTry() {
        this.tryJewel(this.findJewel)
    }
}
