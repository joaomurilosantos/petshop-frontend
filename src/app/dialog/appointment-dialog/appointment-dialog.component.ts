import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../../pet.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-tutor-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrl: './appointment-dialog.component.css'
})
export class AppointmentDialogComponent implements OnInit {
  AppointmentForm: FormGroup;
  pets: Pet[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    public petService: PetService,
    @Inject(MAT_DIALOG_DATA) public data: AppointmentData
  ) {
    this.AppointmentForm = this.fb.group({
      petId: [data?.petId ?? '', Validators.maxLength(50), Validators.required],
      consulta: [data?.consulta ?? '', Validators.maxLength(11)]
    });
  }

  ngOnInit(): void {
    this.listPets();
  }

  listPets(): void {
    this.petService.listPets()
    .subscribe(pets => this.pets = pets);
  }
  
  onSave(): void {
    if (this.AppointmentForm.valid) {
      this.dialogRef.close(this.AppointmentForm.value as AppointmentData);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}

export interface AppointmentData {
    petId: number,
    consulta: Date
}
