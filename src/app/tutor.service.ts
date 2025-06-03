import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { Tutor } from './models/tutor';
import { TutorData } from './dialog/tutor-dialog/tutor-dialog.component';


@Injectable({ providedIn: 'root' })
export class TutorService {

  private tutorUrl = 'https://localhost:7269/api/tutor';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  listTutors(): Observable<Tutor[]> {
    return this.http.get<Tutor[]>(this.tutorUrl, this.httpOptions);
  }

  addTutor(data: TutorData): Observable<Tutor> {
    return this.http.post<Tutor>(this.tutorUrl, data);
  }

  updateTutor(data: Tutor) {    
    return this.http.put<void>(this.tutorUrl, data);
  }

  /** DELETE: delete the hero from the server */
  deleteTutor(id: number) {
    const url = `${this.tutorUrl}/${id}`;

    return this.http.delete<void>(url, this.httpOptions) 
  }

  
}
