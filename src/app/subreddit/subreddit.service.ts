import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {SubredditModel} from './subreddit-model';
import {HttpClient} from '@angular/common/http';
import {share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  subredditBaseUri = 'http://localhost:8081/api/subreddit/';

  constructor(private http: HttpClient) {
  }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>(this.subredditBaseUri).pipe(share());
  }

  createSubreddit(subredditModel: SubredditModel) {
    return this.http.post(this.subredditBaseUri , subredditModel ).pipe(share());
  }
}
