import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public removedHero: string = '';

  removeHero() {
    this.removedHero = this.heroes.shift() || '';
  }

}
