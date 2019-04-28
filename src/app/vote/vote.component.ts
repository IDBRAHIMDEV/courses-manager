import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input("myLike") like = 0;
  @Input("myDislike") dislike = 0;

  constructor() { }

  ngOnInit() {
  }

  inclike() {
    this.like++;
  }

  incDislike() {
    this.dislike++;
  }

}
