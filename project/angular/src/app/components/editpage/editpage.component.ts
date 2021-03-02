import { Component, OnInit } from '@angular/core';
import {BloodService} from 'src/app/blood.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  currentTutorial:any;
  message = '';

  constructor(
    private myService: BloodService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }



  getTutorial(id: any) {
    console.log(id);
    this.myService.get(id)
      .subscribe(
        data => {
          this.currentTutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial() {
    this.myService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Blood Doner Info updated successfully!';
        },
        error => {
          console.log(error);
        });
  }


  deleteTutorial() {
    this.myService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/display']);
        },
        error => {
          console.log(error);
        });
  }



}
