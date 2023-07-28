import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { Router } from '@angular/router';
import { ViewEventComponent } from './view-event/view-event.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    EditprofileComponent,
    ViewEventComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  exports:[
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    EditprofileComponent

  ]
})
export class LandingPageModule { 
constructor( ){

}

}
