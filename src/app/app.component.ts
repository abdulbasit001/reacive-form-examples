import { Component } from '@angular/core';
import { UserComponent } from './Components/user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form1';
  public courses = ['React', 'Angular', 'Vue'];
  constructor() {}
  useModel = new UserComponent(
    'Rob',
    'rob@test.com',
    5545545,
    'react',
    'morning',
    true
  );
  public submitForm(event: any) {
    console.log(this.useModel);
  }
}
