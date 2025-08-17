import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  divVisible:boolean = true;

  number1:string ="";
  number2:string ="";


  showDiv1(){
    this.divVisible = true;
  }

  hideDiv1(){
    this.divVisible = false;
  }
}
