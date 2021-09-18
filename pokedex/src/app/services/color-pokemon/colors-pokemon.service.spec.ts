import { TestBed } from '@angular/core/testing';

import { ColorsPokemonService } from './colors-pokemon.service';

describe('ColorsPokemonService', () => {
  let service: ColorsPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorsPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
