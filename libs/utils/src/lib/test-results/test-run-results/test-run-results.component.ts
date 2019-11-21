import { Component, Input, OnInit } from '@angular/core';
import { TestResult } from '@codelab/utils/src/lib/test-results/common';

@Component({
  selector: 'slides-test-run-results',
  templateUrl: './test-run-results.component.html',
  styleUrls: ['./test-run-results.component.scss']
})
export class TestRunResultsComponent implements OnInit {
  @Input() tests: TestResult[];
  @Input() seeAll = false;

  getName(test) {
    return test.name;
  }

  constructor() {}

  ngOnInit() {}
}
