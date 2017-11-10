import { Component, OnInit } from '@angular/core';

import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
