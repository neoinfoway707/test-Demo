import { Component } from '@angular/core';

@Component({
  selector: 'app-custominfo',
  templateUrl: './custominfo.component.html',
  styleUrls: ['./custominfo.component.css']
})
export class CustominfoComponent {
  constructor(){
    console.log("custominfo module load")
  }
}
