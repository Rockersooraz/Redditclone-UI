import { Component, OnInit } from '@angular/core';
import {SubredditService} from '../subreddit.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-list-subreddit',
  templateUrl: './list-subreddit.component.html',
  styleUrls: ['./list-subreddit.component.scss']
})
export class ListSubredditComponent implements OnInit {

  subreddits = [];
  constructor(private subredditService: SubredditService) { }

  ngOnInit() {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    }, error => {
      throwError(error);
    });
  }

}
