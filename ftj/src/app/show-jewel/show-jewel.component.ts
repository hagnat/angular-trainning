import { Component, OnInit } from '@angular/core';
import { JewelProviderService } from './../jewel-provider.service';

@Component({
  selector: 'app-show-jewel',
  templateUrl: './show-jewel.component.html',
  styleUrls: ['./show-jewel.component.css']
})
export class ShowJewelComponent implements OnInit {

    jewels: string[];

    constructor(private service: JewelProviderService) {
        this.jewels = [];

        service.getJewels().subscribe((data) => {
            this.jewels = data.sort();
        });
    }
}
