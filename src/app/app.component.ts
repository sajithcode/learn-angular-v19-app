import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {DataBinldingComponent } from './data-binlding/data-binlding.component'


@Component({
  selector: 'app-root',
  imports: [DataBinldingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-v19-app';
}
