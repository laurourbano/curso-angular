import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: String = 'Lauro Otávio Urbano';

  userData = {
    email: 'lauro@outlook.com.br',
    tel: 5541998086077,
    role: 'Admin'
  }

  title: String = 'curso-angular';
}
