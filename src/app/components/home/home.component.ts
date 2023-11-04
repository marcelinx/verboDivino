import { Component } from '@angular/core';
import { telaPrincipal } from '../constants/messages.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  messages = telaPrincipal;
}
