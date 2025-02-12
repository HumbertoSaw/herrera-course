import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    
    public characters: Character[] = [{
        id: this.generateId(),
        name: 'Krilin',
        power: 80 
      },{
        id:this.generateId(),
        name: 'Goku',
        power: 100
    }];
    
    mainPageNewCharacter(character:Character):void{
        const newCharacter: Character = {id: this.generateId(),... character}
        this.characters.push(newCharacter)
        console.log(this.characters);
        
    }
    
    mainPageDeleteCharacterById(id:string):void{
        //this.characters.splice(index,1)

        console.log(id);
        this.characters = this.characters.filter(character => character.id !== id);
    }

    private generateId(): string {
        const datePart = Date.now().toString(36);
        const randomPart = Math.random().toString(36).substr(2, 5);
        return `${datePart}-${randomPart}`;
    }
    
}