import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetsComponent } from './dashboard/dashboard.component';
import { TutorComponent } from './tutor/tutor.component';

const routes: Routes = [
  { path: '', redirectTo: '/tutors', pathMatch: 'full' },
  { path: 'pets', component: PetsComponent },
  { path: 'tutors', component: TutorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
