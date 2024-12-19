import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CharacterDetailsComponent } from '../../character-details/character-details.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, CharacterDetailsComponent],
  template: `
    <app-character-details [characterId]="characterId$ | async"></app-character-details>
  `,
})
export default class ProductDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly characterId$ = this.route.paramMap.pipe(
    map((params) => Number(params.get('characterId')))
  );
}