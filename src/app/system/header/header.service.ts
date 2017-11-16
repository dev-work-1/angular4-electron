import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderService {
  sideBarToggle: EventEmitter<boolean>  = new EventEmitter<boolean> ();
  constructor() { }


}
