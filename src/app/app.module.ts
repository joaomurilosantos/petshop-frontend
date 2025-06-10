import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TutorComponent } from './tutor/tutor.component';
import { MessagesComponent } from './messages/messages.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TutorDialogComponent } from './dialog/tutor-dialog/tutor-dialog.component';
import { PetDialogComponent } from './dialog/pet-dialog/pet-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { PetComponent } from './pet/pet.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentDialogComponent } from './dialog/appointment-dialog/appointment-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    AppComponent,
    TutorComponent,
    MessagesComponent,
    TutorDialogComponent,
    PetDialogComponent,
    PetComponent,
    AppointmentComponent,
    AppointmentDialogComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
