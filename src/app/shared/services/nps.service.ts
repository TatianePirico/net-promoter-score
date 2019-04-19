import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class NPSService {

    ApiUri = environment.api;

    constructor(
    private http: HttpClient,
  ) { }

  public getResults(): Observable<any> {
    return this.http.get(this.ApiUri);
  }

  public sendScore(score: number): Observable<any> {
    const body = { score: score };
    return this.http.post(this.ApiUri, body);
  }

  public sendComment(NPSKey: string, comment: string): Observable<any> {
    const body = { id: NPSKey, comment: comment };
    return this.http.post(this.ApiUri, body);
  }
}
