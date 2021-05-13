import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-add-character',
    templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

    @Input()
    new: Character = {
        name: '',
        power: 0
    }

    // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

    constructor( private dbzService : DbzService ){  }

    add(): void {
        this.dbzService.addCharacter(this.new);
        this.cleanForm();
    }

    cleanForm(): void {
        this.new = {
            name: '',
            power: 0
        }
    }

}