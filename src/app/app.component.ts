import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-component-app';
  user1 = {
    name: 'Ajith',
    age: 20,
    job: 'Actor'
  }
  user2 = {
    name: 'Surya',
    age: 30,
    job: 'Politician'
  }

  user3 = {
    name: 'Salman',
    age: 40,
    job: 'Employee'
  }
}
