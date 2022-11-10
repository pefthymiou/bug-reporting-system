import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bug } from '../models/bug';

@Injectable({
  providedIn: 'root'
})
export class BugsService {
  private readonly url: string = 'http://localhost:3000/bugs';

  constructor(private http: HttpClient) { }

  getBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(this.url);
  }

  getById(bugId: string): Observable<Bug> {
    return this.http.get<Bug>(`${this.url}/${bugId}`);
  }

  postBugs(bug: Bug): Observable<any> {
    return this.http.post<Bug>(this.url, bug);
  }

  putBugs(bug: Bug): Observable<any> {
    return this.http.put<Bug>(`${this.url}/${bug.id}`, bug);
  }
}
