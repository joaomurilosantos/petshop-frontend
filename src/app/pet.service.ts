import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { TutorData } from './dialog/tutor-dialog/tutor-dialog.component';
import { Breed, Pet, Species } from './models/pet';
import { PetData } from './dialog/pet-dialog/pet-dialog.component';


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

  listBreeds() {
    return this.http.get<Breed[]>(this.petUrl + `/breed`, this.httpOptions);
  }

  listSpecies() {
    return this.http.get<Species[]>(this.petUrl + `/species`, this.httpOptions);
  }

  addPet(data: PetData): Observable<Pet> {
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
