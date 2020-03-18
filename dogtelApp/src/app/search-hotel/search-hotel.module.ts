import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchHotelPageRoutingModule } from './search-hotel-routing.module';

import { SearchHotelPage } from './search-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchHotelPageRoutingModule
  ],
  declarations: [SearchHotelPage]
})
export class SearchHotelPageModule {}
