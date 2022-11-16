import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApireqService } from './apireq.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApireqService', () => {
  let service: ApireqService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApireqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
