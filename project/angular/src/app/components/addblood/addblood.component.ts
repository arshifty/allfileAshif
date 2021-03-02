import { Component, OnInit } from '@angular/core';
import {BloodService} from 'src/app/blood.service'


@Component({
  selector: 'app-addblood',
  templateUrl: './addblood.component.html',
  styleUrls: ['./addblood.component.css']
})
export class AddbloodComponent implements OnInit {

  constructor(private myservice: BloodService) { }
  
  ngOnInit() {  }


  bloodreg = {
    username: '',
    age: '',
    address: '',
    password: ''
  
  };

  submitted = false;


  getUserValue(values:any)
  {

    console.log(values);
    this.myservice.create(values)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() 
  {
    this.submitted = false;
    this.bloodreg = {
      username: '',
      age: '',
      address: '',
      password: ''
    };
  }


}

