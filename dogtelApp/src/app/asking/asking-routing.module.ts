import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskingPage } from './asking.page';

const routes: Routes = [
  {
    path: '',
    component: AskingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskingPageRoutingModule {}
