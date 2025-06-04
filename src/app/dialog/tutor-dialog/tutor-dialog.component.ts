import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    @Inject(MAT_DIALOG_DATA) public data: TutorData
  ) {
    this.tutorForm = this.fb.group({
      name: [data?.name ?? '', Validators.maxLength(50), Validators.required],
      phone: [data?.phone ?? '', Validators.maxLength(11)],
      email: [data?.email ?? '', [Validators.required, Validators.email, Validators.maxLength(80)]]
    });
  }

  onSave(): void {
    if (this.tutorForm.valid) {
      this.dialogRef.close(this.tutorForm.value as TutorData);
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
