import {Component, OnInit} from '@angular/core';
import {SubredditService} from '../../subreddit/subreddit.service';
import {SubredditModel} from '../../subreddit/subreddit-model';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrls: ['./subreddit-side-bar.component.scss']
})
export class SubredditSideBarComponent implements OnInit {

  subreddits: Array<SubredditModel> = [];
  displayViewAll = false;

  constructor(private subredditService: SubredditService) {
  }

  ngOnInit() {
    this.subredditService.getAllSubreddits().subscribe(data => {

      if (data.length > 3) {
        this.subreddits = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subreddits = data;
      }
    });
  }

}
