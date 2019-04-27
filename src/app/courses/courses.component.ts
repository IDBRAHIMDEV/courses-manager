import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  image = "";
  onEdit = false;
  
  courses = [
    {id: 1, label: "Angular"},
    {id: 2, label: "VueJS"},
    {id: 3, label: "Java"},
    {id: 4, label: "Php"}
  ];

  course = {id: this.courses.length + 1, label: ""};

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    this.courses.push(this.course);
    this.course = {id: this.courses.length + 1, label: ""};
  }

  editCourse(course) {
    this.course = course;
    this.onEdit = true;
  }

  updateCourse() {
    this.onEdit = false;
    this.course = {id: 0, label: ""};
  }

  deleteCourse(index) {
    this.courses.splice(index, 1);
  }

}
