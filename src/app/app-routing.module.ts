import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { TodoComponent } from './Components/todo/todo.component';
import { FirstComponent } from './Components/todo/first/first.component';
import { SecondComponent } from './Components/todo/second/second.component';
import { ThirdComponent } from './Components/todo/third/third.component';
import { EventinfoComponent } from './Components/todo/first/eventinfo/eventinfo.component';
import { CustominfoComponent } from './Components/todo/first/custominfo/custominfo.component';
import { LocationinfoComponent } from './Components/todo/first/locationinfo/locationinfo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todo', component: TodoComponent, children:[
    { path: 'first', component: FirstComponent, children:[
      { path: 'eventinfo', component: EventinfoComponent },
      { path: 'locationinfo', component: LocationinfoComponent },
      { path: 'custominfo', component: CustominfoComponent },
    ] },
    { path: 'second', component: SecondComponent },
    { path: 'third', component: ThirdComponent },
  ] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
