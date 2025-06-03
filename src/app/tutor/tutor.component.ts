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

@Component({
  selector: 'app-heroes',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  tutors: Tutor[] = [];
  newTutor: Tutor | undefined;

  constructor(private tutorService: TutorService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listTutors();
  }

  listTutors(): void {
    this.tutorService.listTutors()
    .subscribe(tutors => this.tutors = tutors);
  }

  add() {
    const dialogRef = this.dialog.open(TutorDialogComponent, {
      data: {},
      width: '300px'
    })

    dialogRef.afterClosed().subscribe(tutor => this.tutorService.addTutor(tutor).subscribe())
  }

  update(tutor: Tutor): void {
    this.tutorService.updateTutor(tutor).subscribe();
  }

  delete(tutor: Tutor): void {
    this.tutorService.deleteTutor(tutor.id).subscribe( r => {
      this.listTutors()
    });
  }
}
