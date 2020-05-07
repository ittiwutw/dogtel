import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectHotelTypePage } from './select-hotel-type.page';

const routes: Routes = [
  {
    path: '',
    component: SelectHotelTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectHotelTypePageRoutingModule {}
