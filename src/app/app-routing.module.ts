import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'landingPage', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
{ path: '', redirectTo: 'landingPage', pathMatch: 'full' },
{path:'adminHome',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
