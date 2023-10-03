import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';

@NgModule({
  declarations: [
    AboutComponent,
  ],
  exports: [AboutComponent],
  imports: [
    CommonModule,
    AvatarComponent
  ]
})
export class AboutModule { }
