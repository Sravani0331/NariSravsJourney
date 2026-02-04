import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  imports: [
    AngularCommonModule,
    BrowserAnimationsModule,
    TimelineModule
  ],
  exports: [
    AngularCommonModule,
    BrowserAnimationsModule,
    TimelineModule
  ]
})
export class CommonModule {}