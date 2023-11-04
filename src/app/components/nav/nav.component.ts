import { Component, OnInit } from '@angular/core';
import { cabecalho } from '../constants/messages.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  messages = cabecalho;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

}
