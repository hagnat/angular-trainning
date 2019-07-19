import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JewelProviderService {

    private jewels: string[];

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
        ];
    }

    getJewels() : Observable<string[]> {
        return of(this.jewels);
    }

    addJewel(jewel: string) {
        if (!this.jewels.includes(jewel)) {
            this.jewels.push(jewel);
            console.log('added jewel: ' + jewel);
        }
    }

    removeJewel(jewel: string) {
        let index = this.jewels.indexOf(jewel);
        if (-1 < index) {
            this.jewels.splice(index, 1);
            console.log('removed jewel: ' + jewel);
        }
    }
}
