import { Component, OnInit,  EventEmitter, Output  } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.css']
})
export class WebHeaderComponent implements OnInit {
  visible = true;
  @Output()  toggleMe: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private headerService: HeaderService ) { }

  ngOnInit() {
  }

   toggle() {
    //  this.toggleMe.emit(!this.visible);
      this.headerService.sideBarToggle.emit(!this.visible);
  }

}
