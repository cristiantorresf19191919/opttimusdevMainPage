import { TestBed } from '@angular/core/testing';

import { ServerrequestService } from './serverrequest.service';

describe('ServerrequestService', () => {
  let service: ServerrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
