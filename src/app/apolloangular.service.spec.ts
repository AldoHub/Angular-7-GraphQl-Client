import { TestBed } from '@angular/core/testing';

import { ApolloangularService } from './apolloangular.service';

describe('ApolloangularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApolloangularService = TestBed.get(ApolloangularService);
    expect(service).toBeTruthy();
  });
});
