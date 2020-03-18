import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchHotelPage } from './search-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: SearchHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchHotelPageRoutingModule {}
