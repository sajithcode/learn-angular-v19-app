import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binlding',
  imports: [FormsModule],
  templateUrl: './data-binlding.component.html',
  styleUrl: './data-binlding.component.css'
})
export class DataBinldingComponent {

  firstName: string = "Sajith";
  roleNum: number = 1;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = "Enter your name";
  divClassName: string = "bg-primary";
  selectedCity: string ="";


  constructor() {
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMessage(){
    alert("Welcome " + this.firstName);
  }

  onChangeCity(){
    console.log("City Changed");
  }
}
