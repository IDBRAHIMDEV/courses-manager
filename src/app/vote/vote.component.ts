import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input("myLike") like = 0;
  @Input("myDislike") dislike = 0;

  @Output("voteChildToParent") voteChildToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  inclike() {
    this.like++;
    this.voteChildToParent.emit({ type: 'like', data: this.like });
  }

  incDislike() {
    this.dislike++;
    this.voteChildToParent.emit({ type: 'dislike', data: this.dislike });

  }

}
