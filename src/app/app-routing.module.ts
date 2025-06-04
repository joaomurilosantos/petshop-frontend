import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorComponent } from './tutor/tutor.component';
import { PetComponent } from './pet/pet.component';

const routes: Routes = [
  { path: '', redirectTo: '/tutors', pathMatch: 'full' },
  { path: 'pets', component: PetComponent },
  { path: 'tutors', component: TutorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
