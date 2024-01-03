import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { TodoComponent } from './Components/todo/todo.component';
import { FirstComponent } from './Components/todo/first/first.component';
import { SecondComponent } from './Components/todo/second/second.component';
import { ThirdComponent } from './Components/todo/third/third.component';
import { EventinfoComponent } from './Components/todo/first/eventinfo/eventinfo.component';
import { LocationinfoComponent } from './Components/todo/first/locationinfo/locationinfo.component';
import { CustominfoComponent } from './Components/todo/first/custominfo/custominfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodoComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    EventinfoComponent,
    LocationinfoComponent,
    CustominfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
