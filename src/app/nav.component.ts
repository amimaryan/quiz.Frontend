import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button md-button routerLink="/">Quiz</button>
        <span style="flex: 1 1 auto;"></span>
        <button md-button routerLink="/register">Register</button>
        <button md-button routerLink="/login">Login</button>
    </mat-toolbar>
  `
  

})
export class NavComponent {
}
