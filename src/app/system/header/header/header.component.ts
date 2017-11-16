import { Component, OnInit } from '@angular/core';

import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule } from '@angular/material';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string;
  public headerService: HeaderService;

  constructor(headerService: HeaderService) {
    this.title = 'Doctors';
    this.headerService = headerService;
   }

  ngOnInit() {
  }

  sideBarToggle(visible: boolean) {
    console.log('in header sideBarToggle here');
  }

}
