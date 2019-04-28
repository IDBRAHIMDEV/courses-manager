import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  list = true;
  image = "";
  onEdit = false;
  
  courses = [
    {id: 1, label: "Angular", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, expedita.", isFavoris: true, vote: {like: 5, disLike: 0}, price: 85.5478, published: new Date()},
    {id: 2, label: "VueJS", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, expedita.", isFavoris: true, vote: {like: 1500, disLike: 80}, price: 152.9978, published: new Date()},
    {id: 3, label: "Java", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, expedita.", isFavoris: false, vote: {like: 50, disLike: 10}, price: 74.5668, published: new Date()},
    {id: 4, label: "Php", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, expedita.", isFavoris: true, vote: {like: 0, disLike: 0}, price: 452.4321, published: new Date()}
  ];

  course = {id: this.courses.length + 1, label: "", isFavoris: true, vote: {like: 0, disLike: 0}, description: "", price: 0, published: new Date()};

  constructor() { }

  ngOnInit() {
  }

  addCourse() {
    this.courses.push(this.course);
    this.course = {id: this.courses.length + 1, label: "", isFavoris: true, vote: {like: 0, disLike: 0}, description: "", price: 0, published: new Date()};
  }

  editCourse(course) {
    this.course = course;
    this.onEdit = true;
  }

  updateCourse() {
    this.onEdit = false;
    this.course = {id: 0, label: "", isFavoris: true, vote: {like: 0, disLike: 0}, description: "", price: 0, published: new Date()};
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

  toggleFavoris(course) {
    course.isFavoris = !course.isFavoris
  }

  like(course) {
    course.vote.like++;
  }

  dislike(course) {
    course.vote.disLike++;
  }

  infoParent(event, course) {
    if(event.type == "like") {
       course.vote.like = event.data
    }else {
      course.vote.disLike = event.data
    }
  }

}
