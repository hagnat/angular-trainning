
import { Component }from '@angular/core';
import { JewelProviderService } from './jewel-provider.service';
import { Location } from './location/location.component';

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
    server: Any;

    constructor(private service: JewelProviderService) {
        this.jewels = [];

        service.getJewels().subscribe((data) => {
            this.jewels = data;
            this.initGame();
        });

        this.server = {
            locations: [{
                site: 'a',
                suite: 'b',
                rack: 'c',
                unit: 'd',
            }, {
                site: '1',
                suite: '2',
                rack: '3',
            }],
        };

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
