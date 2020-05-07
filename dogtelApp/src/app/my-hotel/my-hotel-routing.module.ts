import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHotelPage } from './my-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: MyHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyHotelPageRoutingModule {}
