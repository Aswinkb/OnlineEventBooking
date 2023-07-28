import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [{ path: '', component: LandingPageComponent },
{ path: 'userRegister', component: RegisterComponent },
{path: 'events',component:EventsComponent},
{path: 'editprofile',component:EditprofileComponent},
{path:'viewEvent/:id',component:ViewEventComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
