import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() {
    this.post = new Post('', '');
  }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    }
    if (this.post.loveIts < 0) {
      return 'red';
    }
  }

  onUpvote() {
    (this.post.loveIts)++;
  }

  onDownvote() {
    (this.post.loveIts)--;
  }
}
