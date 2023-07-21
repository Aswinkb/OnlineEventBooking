import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [{ path: '', component: LandingPageComponent },
{ path: 'userRegister', component: RegisterComponent },
{path: 'events',component:EventsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
