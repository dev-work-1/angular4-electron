import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import {FooterModule} from '../footer/footer.module';
import { HeaderService } from '../header/header.service';
import { MdSidenav } from '@angular/material';
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private headerService: HeaderService) {
    this.toggleSideBar();
   }

  ngOnInit() {
  }

  toggleSideBar() {
    this.headerService.sideBarToggle.subscribe(
      (visible) => {
         this.sidenav.open();
      }
   );

  }

}
