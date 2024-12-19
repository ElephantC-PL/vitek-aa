import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersService } from './characters-service/characters.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: `
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `,
})
export class AppComponent {
  service = inject(CharactersService);

  ngOnInit() {
    this.service.loadCharacters();
  }
}
