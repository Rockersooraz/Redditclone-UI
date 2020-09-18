import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {PostModel} from '../post.model';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.scss']
})
export class PostTitleComponent implements OnInit {

  faComments = faComments;

  @Input()
  posts: PostModel[];


  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
}
