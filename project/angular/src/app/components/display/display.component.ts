import { Component, OnInit } from '@angular/core';
import {BloodService} from 'src/app/blood.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  
  tutorials: any;
  currentTutorial:any;
  currentIndex = -1;
  username = '';
  
  
  

  constructor(private tutorialService: BloodService) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

 retrieveTutorials() {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  setActiveTutorial(tutorial:any, index:any) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  refreshList() {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  removeAllTutorials() {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchUserNmae() {
    this.tutorialService.findByUsername(this.username)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }  

}
