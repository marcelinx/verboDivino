import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainScreenComponent } from './components/mainScreen/mainscreen.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
