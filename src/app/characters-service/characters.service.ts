import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Character, DefaultService } from '../../api';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  characters: WritableSignal<Character[]> = signal<Character[]>([]);
  service = inject(DefaultService);

  loadCharacters():void {
    this.service.getCharacters().subscribe(response => {
      if(response.results) {console.log('load', response.results); this.characters.set(response.results)}     
    });
  }
  
  getCharacter(id: number): Character | undefined {
    return this.characters().find(character => character.id === id);
  }

  getCharacters(): Character[] {
    return this.characters();
  }
}
