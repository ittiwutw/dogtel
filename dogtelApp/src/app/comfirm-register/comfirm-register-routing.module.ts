import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComfirmRegisterPage } from './comfirm-register.page';

const routes: Routes = [
  {
    path: '',
    component: ComfirmRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComfirmRegisterPageRoutingModule {}
