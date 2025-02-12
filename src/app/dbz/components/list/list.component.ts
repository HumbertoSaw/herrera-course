import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    standalone: false,
})

export class ListComponent {

    @Input()
    public characterList: Character[] = []

    @Output()
    public onDeleteCharacter: EventEmitter<string>  = new EventEmitter();

    emitDeltecharacter(id:string):void{
        if(!id) return;
        this.onDeleteCharacter.emit(id);
    }
}