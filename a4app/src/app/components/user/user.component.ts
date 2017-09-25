import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = 'Steve Smith';
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;

  constructor() {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...')

    this.name = 'John Doe';
    this.age = 21;
    this.address = {
      street: 'Park Avenue',
      city: 'Boston',
      state: 'LA'
    }
    this.hobbies = ['Write code', 'watch movies', 'listen to music'];
    this.hello = 'Hello';
  }

  onclick() {
    this.name = 'musk_1107';
    this.hobbies.push('New hobby');
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}
