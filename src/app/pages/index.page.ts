import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterListComponent],
  template: `    
    <app-character-list/>
  `,
})
export default class HomeComponent {
}
