import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { Error404PageComponent } from '../error404-page/error404-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'about', component: AboutPageComponent}, // /about/(stam)/
      {path: 'settings', loadChildren: '../settings/settings.module#SettingsModule'},
      {path: 'todos', loadChildren: '../todo/todo.module#TodoModule'},
      {path: '**', component: Error404PageComponent},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
