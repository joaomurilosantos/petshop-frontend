import { Component, OnInit } from '@angular/core';
import { TutorService } from '../tutor.service';
import { Tutor } from '../models/tutor';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { TutorDialogComponent } from '../dialog/tutor-dialog/tutor-dialog.component';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../appointment.service';
import { AppointmentDialogComponent } from '../dialog/appointment-dialog/appointment-dialog.component';
import { consumerAfterComputation } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-tutors',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listAppointment();
  }

  listAppointment(): void {
    this.appointmentService.listAppointments()
    .subscribe(appointment => this.appointments = appointment);
  }

  add() {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      data: {},
      width: '300px'
    })

    dialogRef.afterClosed().subscribe(appointment => this.appointmentService.addAppointment(appointment).subscribe( _ => {
      this.listAppointment()
    }));
  }

  update(appointment: Appointment): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      data: {
        petId: appointment.petId,
        consulta: appointment.consulta
      },
      width: '300px'
    })

    dialogRef.afterClosed().subscribe(data => {
      let updatedAppointment = {
        petId: data.petId,
        consulta: data.consulta,
        id: appointment.id
      }
      
      this.appointmentService.updateAppointment(updatedAppointment).subscribe(_ => this.listAppointment())
    });
  }

  delete(appointment: Appointment): void {
    this.appointmentService.deleteAppointment(appointment.id).subscribe( r => {
      this.listAppointment()
    });
  }
}
