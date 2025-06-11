import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TutorService } from '../../tutor.service';
import { Tutor } from '../../models/tutor';
import { Breed, Species } from '../../models/pet';
import { PetService } from '../../pet.service';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrl: './pet-dialog.component.css'
})
export class PetDialogComponent implements OnInit {
  petForm: FormGroup;
  tutors: Tutor[] = [];
  breeds: Breed[] = [];
  species: Species[] = [];
  selectedOption!: number;
  
  constructor(
    private fb: FormBuilder,
    private tutorService: TutorService,
    public dialogRef: MatDialogRef<PetDialogComponent>,
    public petService: PetService,
    @Inject(MAT_DIALOG_DATA) public data: PetData
  ) {
    this.petForm = this.fb.group({
      name: [data?.name ?? '', [Validators.maxLength(100), Validators.required]],
      speciesId: [data?.speciesId ?? '', Validators.maxLength(20)],
      breedId: [data?.breedId ?? '', Validators.maxLength(20)],
      tutorId: [data?.tutorId ?? '', Validators.required],
      age: [data?.age ?? '']
    });
  }

  ngOnInit(): void {
    this.listTutors();
    this.listBreeds();
    this.listSpecies();
  }

  listTutors(): void {
    this.tutorService.listTutors()
    .subscribe(tutors => this.tutors = tutors);
  }

  listBreeds(): void {
    this.petService.listBreeds().subscribe(breeds => this.breeds = breeds);
  }

  listSpecies(): void {
    this.petService.listSpecies().subscribe(species => this.species = species);
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
  speciesId: number,
  breedId: number,
  tutorId: number,
  age: number
}
