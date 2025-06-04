import { Component, OnInit } from '@angular/core';
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
import { PetService } from '../pet.service';
import { Pet } from '../models/pet';
import { PetDialogComponent } from '../dialog/pet-dialog/pet-dialog.component';

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

    dialogRef.afterClosed().subscribe(tutor => this.petService.addPet(tutor).subscribe( _ => {
      this.listPets()
    }));
  }

  update(tutor: Tutor): void {
    const dialogRef = this.dialog.open(PetDialogComponent, {
      data: {
        name: tutor.name,
        phone: tutor.phone,
        email: tutor.email
      },
      width: '300px'
    })

    dialogRef.afterClosed().subscribe(tutor => this.petService.updatePet(tutor).subscribe());
  }

  delete(tutor: Tutor): void {
    this.petService.deletePet(tutor.id).subscribe( r => {
      this.listPets()
    });
  }
}