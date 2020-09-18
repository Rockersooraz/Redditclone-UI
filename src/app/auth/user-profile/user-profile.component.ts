import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../shared/post.service';
import {CommentService} from '../../comment/comment.service';
import {PostModel} from '../../shared/post.model';
import {CommentPayload} from '../../comment/comment-payload';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
   posts: PostModel[];
   postLength: number;
   name: any;
   comments: CommentPayload[];
  commentLength: number;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
              private commentService: CommentService) {
    this.name = this.activatedRoute.snapshot.params.name;

    this.postService.getAllPostByUser(this.name).subscribe( posts => {
      this.posts = posts;
      this.postLength = posts.length;
    });

    this.commentService.getAllCommentsByUser(this.name).subscribe( comment => {
      this.comments = comment;
      this.commentLength = comment.length;
    });

  }

  ngOnInit() {
  }

}
