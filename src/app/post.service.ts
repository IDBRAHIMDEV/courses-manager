import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = "";
  constructor(private http: HttpClient) {
      this.url = "https://jsonplaceholder.typicode.com/posts"
   }

  _getAllPosts() {
    return this.http.get(this.url);
  }

  _persistPost(post) {
    return this.http.post(this.url, post);
  }

  _deletePost(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
