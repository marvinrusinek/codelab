import { Component } from '@angular/core';
import { bootstrap, builder, exercise, html, stylesheet } from '../../../exercise/helpers/helpers';

declare const require;

@Component({
  selector: 'slides-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css', './bsod.css']
})
export class StructuralDirectivesComponent {
  code = {
    materialTabs: [
      html(require('!!raw-loader!./samples/material-tabs/app.html'), require('!!raw-loader!./samples/material-tabs/app.solved.html')),
      exercise('app.component', require('!!raw-loader!./samples/material-tabs/app.component.ts')),
      exercise('alert.component', require('!!raw-loader!./samples/material-tabs/alert.component.ts')),
      exercise('app.module', require('!!raw-loader!./samples/material-tabs/app.module.ts')),
      exercise('break-my-computer.component', require('!!raw-loader!./samples/material-tabs/break-my-computer.component.ts')),
      stylesheet(require('!!raw-loader!./samples/material-tabs/style.css')),
      bootstrap('main', builder.bootstrap()),
    ],
    materialTabsStructuralDirective: [
      html(require('!!raw-loader!./samples/material-tabs-structural-directive/app.html'),
        require('!!raw-loader!./samples/material-tabs-structural-directive/app.solved.html')),
      exercise('app.component', require('!!raw-loader!./samples/material-tabs-structural-directive/app.component.ts')),
      exercise('hideme.directive', require('!!raw-loader!./samples/material-tabs-structural-directive/hideme.directive.ts'),
        require('!!raw-loader!./samples/material-tabs-structural-directive/hideme.directive.solved.ts')),
      exercise('alert.component', require('!!raw-loader!./samples/material-tabs-structural-directive/alert.component.ts')),
      exercise('app.module', require('!!raw-loader!./samples/material-tabs-structural-directive/app.module.ts')),
      stylesheet(require('!!raw-loader!./samples/material-tabs/style.css')),
      bootstrap('main', builder.bootstrap()),
    ]
    ,
    microSyntax: [
      html(`<div *ngFor="let x of 122"></div>`),
      bootstrap('main', require('!!raw-loader!./samples/micro-syntax/ms.ts'))
    ],

    mdTabNavBar: [
      exercise('app.component', require('!!raw-loader!./samples/md-tab-nav-bar/app.component.ts')),
      exercise('alert.component', require('!!raw-loader!./samples/md-tab-nav-bar/alert.component.ts')),
      exercise('tab.component', require('!!raw-loader!./samples/md-tab-nav-bar/tab.component.ts')),
      stylesheet(require('!!raw-loader!./samples/material-tabs/style.css')),
      exercise('app.module', require('!!raw-loader!./samples/md-tab-nav-bar/app.module.ts')),
      bootstrap('main', builder.bootstrap()),
    ],

    structuralDirectives: {
      ngIfBefore: require('!!raw-loader!./samples/structural-directives/ng-if-before.html'),
      ngIfAfter: require('!!raw-loader!./samples/structural-directives/ng-if-after.html'),
      ngForBefore: require('!!raw-loader!./samples/structural-directives/ng-for-after.html'),
      ngForAfter: require('!!raw-loader!./samples/structural-directives/ng-for-after.html'),
      microSyntax: require('!!raw-loader!./samples/structural-directives/microsyntax.html')
    }
  };

  constructor() {

  }
}
