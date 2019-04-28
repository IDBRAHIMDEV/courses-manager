import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  post = {
    title: '',
    body: ''
  }
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  
  persistPost() {
    this.postService._persistPost(this.post)
                    .subscribe(res => {
                      this.posts = [res, ...this.posts];
                    })
  }

  getAllPosts() {
    this.postService._getAllPosts()
                    .subscribe((response: any[]) => {
                      this.posts = response;
                    })
  }


  deletePost(id, index) {
    this.postService._deletePost(id)
                    .subscribe(res => this.posts.splice(index, 1))
  }


}
