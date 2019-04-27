import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course = "";
  image = "https://avatars0.githubusercontent.com/u/6206647?s=460&v=4";
  courses = ['Angular', 'Spring Boot', 'Laravel']; 
  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    this.courses.unshift(this.course);
    this.course = "";
  }

}
