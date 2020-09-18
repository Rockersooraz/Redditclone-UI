import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';
import {PostModel} from '../shared/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   posts: PostModel[];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }

  ngOnInit() {
  }

}
