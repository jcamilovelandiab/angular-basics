import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  constructor( private dbzService : DbzService ) {}

  get characters(): Character[] {
    return this.dbzService.characters;
  }

}
