import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

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

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        
        this.courses.splice(index, 1);

        Swal.fire({
          title: 'This course is deleted !',
          text: 'You will not be able to recover this imaginary file!',
          type: 'success',
          timer: 3000
        })
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      }
    })
    
  }

}
