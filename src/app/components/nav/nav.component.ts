import { Component } from '@angular/core';
import { cabecalho } from '../constants/messages.constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  messages = cabecalho;

  constructor() {}

}
