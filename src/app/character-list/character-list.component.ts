import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Character, DefaultService } from '../../api';
import { RouterLink } from '@angular/router';
import { CharactersService } from '../characters-service/characters.service';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  service = inject(CharactersService);

  characters = computed(() => {   
    return this.service.characters()
  })
}
