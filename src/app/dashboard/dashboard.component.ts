import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { TutorService } from '../tutor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class PetsComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: TutorService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.listTutors()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
