import { Component, OnInit, Input } from '@angular/core';

export interface Location {
    site: string;
    suite: string;
    rack: string;
    unit?: string;
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    @Input()
    location: Location;
}

@Component({
  selector: 'app-customer-aware-header',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class CustomerAwareHeaderComponent implements OnInit {

    @Input()
    location: Location;
}
