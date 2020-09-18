import {Injectable} from '@angular/core';
import {CommentPayload} from './comment-payload';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../shared/post.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = `http://localhost:8081/api/comments/`;

  constructor(private http: HttpClient) {
  }

  postComment(commentPayload: CommentPayload): Observable<CommentPayload> {
    return this.http.post<CommentPayload>(this.baseUrl, commentPayload);
  }

  getAllCommentsForPost(postId: number): Observable<any> {
    return this.http.get(this.baseUrl + `by-post/${postId}`);
  }

    getAllCommentsByUser(name: any): Observable<CommentPayload[]> {
      return this.http.get<CommentPayload[]>(this.baseUrl + `by-user/${name}`);
  }
}

