import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../presentation/slide-routes';
import { BinaryComponent } from './binary.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FakeGifComponent } from './fake-gif/fake-gif.component';
import { DisplayDynamicComponent } from './display-dynamic.component/display-dynamic-component.component';
import { GifPaletteComponent } from './gif-palette/gif-palette.component';
import { BinaryViewModule } from './binary-view/binary-view.module';
import { MidiComponent } from './midi/midi.component';
import { AsciiComponent } from './ascii/ascii.component';
import { BindecComponent } from './bindec/bindec.component';
import { MessageComponent } from './message/message.component';
import { JsonComponent } from './json/json.component';
import { SimpleEditorModule } from '../ast/simple-editor/simple-editor.module';
import { TooltipsModule } from '../../../tooltips/tooltips.module';
import { CompareComponent } from './compare/compare.component';
import { MatAutocompleteModule } from '@angular/material';


const routes = RouterModule.forChild(
  SlidesRoutes.get(BinaryComponent)
);

@NgModule({
  imports: [
    routes,
    FormsModule,
    CommonModule,
    BinaryViewModule,
    SimpleEditorModule,
    TooltipsModule,
    MatAutocompleteModule
  ],
  declarations: [
    BinaryComponent,
    FakeGifComponent,
    DisplayDynamicComponent,
    GifPaletteComponent,
    MidiComponent,
    AsciiComponent,
    BindecComponent,
    MessageComponent,
    JsonComponent,
    CompareComponent,
  ],
  entryComponents: [
    FakeGifComponent,
    MidiComponent,
    AsciiComponent,
    BindecComponent,
    MessageComponent,
    JsonComponent,
    CompareComponent,
  ],
  exports: [BinaryComponent]
})
export class BinaryModule {

}
