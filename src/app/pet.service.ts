import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { TutorData } from './dialog/tutor-dialog/tutor-dialog.component';
import { Pet } from './models/pet';


@Injectable({ providedIn: 'root' })
export class PetService {

  private petUrl = 'https://localhost:7269/api/pet';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  listPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petUrl, this.httpOptions);
  }

  addPet(data: TutorData): Observable<Pet> {
    return this.http.post<Pet>(this.petUrl, data);
  }

  updatePet(data: Pet) {    
    return this.http.put<void>(this.petUrl, data);
  }

  deletePet(id: number) {
    const url = `${this.petUrl}/${id}`;

    return this.http.delete<void>(url, this.httpOptions) 
  }
}
