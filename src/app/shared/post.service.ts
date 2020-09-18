import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from './post.model';
import {CreatePostPayload} from '../post/create-post-payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = `http://localhost:8081/api/posts/`;

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.baseUrl);
  }

  getPost(postId: number): Observable<PostModel> {
    return this.http.get<PostModel>(this.baseUrl + postId);
  }

  createPost(postPayload: CreatePostPayload) {
    return this.http.post(this.baseUrl, postPayload);
  }

  getAllPostByUser(name: any): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.baseUrl + `by-user/${name}`);
  }
}
