import { RouterComponent } from './router.component';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../../../../../libs/presentation/src/lib/slide-routes';

import { FeedbackModule } from '../../../../../../../libs/feedback/src/lib/feedback.module';
import { CommonModule } from '@angular/common';
import { BrowserWindowModule } from '../../../../../../../libs/browser/src/lib/browser.module';
import { RunnersModule } from '../../../../../../../libs/exercise/src/lib/runners/runners.module';
import { Ng2TsExercises } from '../../../../../../../ng2ts/ng2ts';
import { PresentationModule } from '../../../../../../../libs/presentation/src/lib/presentation.module';
import { CodelabExerciseModule } from '../../components/exercise.module';
import { SlidesModule } from '../../../../../../../libs/slides/src';
import { SimpleEditorModule } from '../../../../../../../libs/code-demos/src/lib/editor/simple-editor.module';
import { FormsModule } from '@angular/forms';

const routes = RouterModule.forChild(
  [
    {
      path: '',
      redirectTo: '/router/intro',
      pathMatch: 'full'
    }, ...SlidesRoutes.get(RouterComponent)
  ]
);

@NgModule({
  imports: [
    routes,
    PresentationModule,

    FeedbackModule,
    CommonModule,
    BrowserWindowModule,
    RunnersModule,
    CodelabExerciseModule,
    SlidesModule,
    SimpleEditorModule,
    FormsModule,
  ],
  declarations: [RouterComponent],
  providers: [Ng2TsExercises],
  exports: [RouterComponent]
})
export class RouterCodelabModule {
}
