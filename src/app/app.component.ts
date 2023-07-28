import { Component } from '@angular/core';
import { LandingPageModule } from './landing-page/landing-page.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roughPrj';
  constructor(private lc:LandingPageModule){
     
  }
}
