import { Component } from '@angular/core';

@Component({
  selector: 'app-locationinfo',
  templateUrl: './locationinfo.component.html',
  styleUrls: ['./locationinfo.component.css']
})
export class LocationinfoComponent {
  constructor(){
    console.log("locationinfo module load")
  }
}
