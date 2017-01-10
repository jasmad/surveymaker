/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirebaseManagerService } from './firebase-manager.service';

describe('FirebaseManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseManagerService]
    });
  });

  it('should ...', inject([FirebaseManagerService], (service: FirebaseManagerService) => {
    expect(service).toBeTruthy();
  }));
});
