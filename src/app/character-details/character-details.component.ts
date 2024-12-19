import { Component, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { CharactersService } from '../characters-service/characters.service';
import { Character } from 'src/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-details',
  imports: [RouterLink],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit{
  @Input() characterId: number | null = null;
  private service = inject(CharactersService);
  character: Character | undefined;

  ngOnInit() {
    if(this.characterId) this.character = this.service.getCharacter(this.characterId);    
  }
}
