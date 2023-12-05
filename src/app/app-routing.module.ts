import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainScreenComponent } from './components/mainScreen/mainscreen.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
