import { Injectable } from '@angular/core';

import { Case } from './case';
import { CASES } from './mock-cases';

@Injectable()
export class CaseService {
  getCases(): Promise<Case[]> {
    return Promise.resolve(CASES);
  }
}
