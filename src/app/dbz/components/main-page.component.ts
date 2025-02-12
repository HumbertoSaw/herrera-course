import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: false
})
export class MainPageComponent {

  constructor(private dbzService: DbzService){
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.mainPageDeleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.mainPageNewCharacter(character);
  }
}
