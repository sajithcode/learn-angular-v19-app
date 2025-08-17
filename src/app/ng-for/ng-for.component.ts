import { Component } from '@angular/core';
import { NgFor } from '@angular/common';




@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  employeeArray: any[] = [
    { id: 1, name: 'John Doe', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', position: 'Project Manager' },
    { id: 3, name: 'Mike Johnson', position: 'UX Designer' }
  ];

}
