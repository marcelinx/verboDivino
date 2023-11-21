import { Component } from '@angular/core';
import { telaPrincipal } from '../../constants/messages.constants';

@Component({
  selector: 'app-servicos-carrousel',
  templateUrl: './servicos-carrousel.component.html',
  styleUrls: ['./servicos-carrousel.component.scss'],
})
export class ServicosCarrouselComponent {
  messages = telaPrincipal;

}
