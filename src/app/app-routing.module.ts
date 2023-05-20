import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'course/:type/:index',
    component: DetailComponent,
  },
  {
    path: 'course/:type',
    component: CourseComponent,
  },
  {
    path: 'contact',
    component: ContactusComponent,
  },
  {
    path: '**',
    redirectTo:'/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
