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
  public submitForm(event: any) {
    // console.log(userForm.value | json);
  }
  useModel = new UserComponent('Rob', 'rob@test.com', 5545545, 'react', 'morning', true);
}
