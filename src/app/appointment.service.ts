import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { Tutor } from './models/tutor';
import { TutorData } from './dialog/tutor-dialog/tutor-dialog.component';
import { Appointment } from './models/appointment';
import { AppointmentData } from './dialog/appointment-dialog/appointment-dialog.component';


@Injectable({ providedIn: 'root' })
export class AppointmentService {

  private appointmentUrl = 'https://localhost:7269/api/appointment';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  listAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointmentUrl, this.httpOptions);
  }

  addAppointment(data: AppointmentData): Observable<Appointment> {
    const dto : AppointmentDto = {
      petId: data.petId,
      consultDateTime: data.consultDateTime.toISOString().slice(0, 19),
    }
    return this.http.post<Appointment>(this.appointmentUrl, data);
  }

  updateAppointment(data: Appointment) {    
    return this.http.put<void>(this.appointmentUrl, data);
  }

  deleteAppointment(id: number) {
    const url = `${this.appointmentUrl}/${id}`;

    return this.http.delete<void>(url, this.httpOptions) 
  }
}

export interface AppointmentDto {
    id?: number,
    petId: number,
    consultDateTime: string
}