import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tutor } from '../../models/tutor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-tutor-dialog',
  templateUrl: './tutor-dialog.component.html',
  styleUrl: './tutor-dialog.component.css'
})
export class TutorDialogComponent {
  tutorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TutorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tutor
  ) {
    this.tutorForm = this.fb.group({
      id: [data?.id ?? 0],
      name: [data?.name ?? '', Validators.required],
      phone: [data?.phone ?? ''],
      email: [data?.email ?? '', [Validators.required, Validators.email]]
    });
  }

  onSave(): void {
    if (this.tutorForm.valid) {
      this.dialogRef.close(this.tutorForm.value as Tutor);
    }
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }
}

export interface TutorData {
  name: string,
  phone: string,
  email: string
}
