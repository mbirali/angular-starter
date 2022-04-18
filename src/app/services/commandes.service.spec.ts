import { TestBed } from '@angular/core/testing';

import { CommandesService } from './commandes.service';

describe('CommandesService', () => {
  let service: CommandesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
