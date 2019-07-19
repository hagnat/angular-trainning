import { Component, OnInit } from '@angular/core';
import { JewelProviderService } from './../jewel-provider.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-jewel',
  templateUrl: './new-jewel.component.html',
  styleUrls: ['./new-jewel.component.css']
})

export class NewJewelComponent implements OnInit {

    service: JewelProviderService;
    jewelForm: FormBuilder;

    constructor(service: JewelProviderService, private formBuilder: FormBuilder) {
        this.service = service;
    }

    ngOnInit() {
        this.jewelForm = this.formBuilder.group({
            'jewelName': ['', Validators.required]
        });
    }

    addJewel() {
        this.service.addJewel(this.jewelForm.value.jewelName);
        this.jewelForm.reset();
    }
}
