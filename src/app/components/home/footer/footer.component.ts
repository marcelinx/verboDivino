import { Component } from '@angular/core';
import { footerInfo } from '../../constants/messages.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerInfo = footerInfo; 
}
