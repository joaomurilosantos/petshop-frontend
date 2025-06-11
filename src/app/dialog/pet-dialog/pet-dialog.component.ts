import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../../tutor.service';
import { Tutor } from '../../models/tutor';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrl: './pet-dialog.component.css'
})
export class PetDialogComponent implements OnInit {
  petForm: FormGroup;
  tutors: Tutor[] = [];
  selectedOption!: number;
  
  constructor(
    private fb: FormBuilder,
    private tutorService: TutorService,
    public dialogRef: MatDialogRef<PetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PetData
  ) {
    this.petForm = this.fb.group({
      name: [data?.name ?? '', [Validators.maxLength(100), Validators.required]],
      species: [data?.species ?? '', Validators.maxLength(20)],
      breed: [data?.breed ?? '', Validators.maxLength(20)],
      tutorId: [data?.tutorId ?? '', Validators.required],
      age: [data?.age ?? '']
    });
  }

  ngOnInit(): void {
    this.listTutors();
  }

  listTutors(): void {
    this.tutorService.listTutors()
    .subscribe(tutors => this.tutors = tutors);
  }

  onSave(): void {
    if (this.petForm.valid) {
      this.dialogRef.close(this.petForm.value as PetData);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}

export interface PetData {
  name: string,
  species: string,
  breed: string,
  tutorId: number,
  age: number
}
