import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharactersService } from '../characters-service/characters.service';
import { computed } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule, RouterLink, MatListModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  service = inject(CharactersService);

  characters = computed(() => {   
    return this.service.characters()
  })
}
