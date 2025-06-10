import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagina: 'pets' | 'tutores' = 'tutores';

  pets = [
    { name: 'Bolinha' },
    { name: 'Zeca' }
  ];
  
  tutors = [
    { name: 'João Bobão' },
    { name: 'Jp viado' }
  ];
}
