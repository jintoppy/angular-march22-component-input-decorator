import { Component, OnInit, Input } from '@angular/core';
type User = {
  name:string;
  age: number;
  job: string;

}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input()
  user?:User;
  // @Input()
  // name?:string;

  // @Input()
  // age?: string;

  // @Input()
  // job?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
