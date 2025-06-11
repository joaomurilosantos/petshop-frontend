import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { PetService } from '../pet.service';
import { Breed, Pet, Species } from '../models/pet';
import { PetData, PetDialogComponent } from '../dialog/pet-dialog/pet-dialog.component';

@Component({
  selector: 'app-pets',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listPets();
  }

  listPets(): void {
    this.petService.listPets()
    .subscribe(pets => this.pets = pets);
  }

  add() {
    const dialogRef = this.dialog.open(PetDialogComponent, {
      data: {},
      width: '300px'
    })

    dialogRef.afterClosed().subscribe(pet => this.petService.addPet(pet).subscribe( _ => {
      this.listPets()
    }));
  }

  update(pet: Pet): void {
    const dialogRef = this.dialog.open(PetDialogComponent, {
      data: {
        name: pet.name,
        speciesId: pet.speciesId,
        breedId: pet.breedId,
        tutorId: pet.tutorId,
        age: pet.age
      },
      width: '300px'
    })

    dialogRef.afterClosed().subscribe(data => {
      let updatedPet: Pet = {
        name: data.name,
        speciesId: data.speciesId,
        breedId: data.breedId,
        tutorId: data.tutorId,
        age: data.age,
        id: pet.id
      }
      this.petService.updatePet(updatedPet).subscribe(_ => this.listPets());
    });
  }

  delete(pet: Pet): void {
    this.petService.deletePet(pet.id).subscribe( r => {
      this.listPets()
    });
  }
}