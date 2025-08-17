import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {DataBinldingComponent } from './data-binlding/data-binlding.component'
import { NgIfComponent } from './ng-if/ng-if.component'
import { NgForComponent } from './ng-for/ng-for.component';


@Component({
  selector: 'app-root',
  imports: [NgForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-v19-app';
}
