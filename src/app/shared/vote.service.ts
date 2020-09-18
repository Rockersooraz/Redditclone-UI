import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VotePayload} from './vote-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private baseUrl = `http://localhost:8081/api/votes/`;

  constructor(private http: HttpClient) {
  }

  postVote(vote: VotePayload): Observable<any> {
    return this.http.post(this.baseUrl, vote);
  }
}
