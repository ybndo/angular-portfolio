import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeTitleComponent } from '../../components/home-title/home-title.component';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeTitleComponent,
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AvatarComponent
  ]

})
export class HomePageModule { }
