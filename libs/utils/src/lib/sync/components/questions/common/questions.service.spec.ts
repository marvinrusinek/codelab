import { TestBed } from '@angular/core/testing';

import { QuestionsService } from './questions.service';

describe('QuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionsService = TestBed.inject(QuestionsService);
    expect(service).toBeTruthy();
  });
});
