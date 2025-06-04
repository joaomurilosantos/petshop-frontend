import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PetsComponent } from './dashboard/dashboard.component';
import { TutorComponent } from './tutor/tutor.component';
import { MessagesComponent } from './messages/messages.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { TutorDialogComponent } from './dialog/tutor-dialog/tutor-dialog.component';
import { PetDialogComponent } from './dialog/pet-dialog/pet-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule    
  ],
  declarations: [
    AppComponent,
    PetsComponent,
    TutorComponent,
    MessagesComponent,
    TutorDialogComponent,
    PetDialogComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
