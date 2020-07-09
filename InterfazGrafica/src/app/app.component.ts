import { Router, NavigationStart } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from './components/login/login/login.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InterfazGrafica';
  subscription: Subscription;
  constructor(private router: Router) {
    /*this.subscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart){
          this.router.navigate(['pendientes']);
        }
    });*/
  }
}
