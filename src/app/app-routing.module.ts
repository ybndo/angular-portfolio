import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { AbilitiesComponent } from './pages/abilities/abilities.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent,
    pathMatch: 'full',
    data: { animation: 'openClosePage'}
  },
  {
    path:"about",
    component:AboutComponent,
    data: { animation: 'openClosePage'}
  },
  {
    path:"abilities",
    component:AbilitiesComponent
  },
  {
    path:"projects",
    component:ProjectsComponent
  },
  {
    path:"contact",
    component:ContactComponent
} ,
  {
    path:"**",
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
