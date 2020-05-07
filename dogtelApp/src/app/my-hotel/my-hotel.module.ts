import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyHotelPageRoutingModule } from './my-hotel-routing.module';

import { MyHotelPage } from './my-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyHotelPageRoutingModule
  ],
  declarations: [MyHotelPage]
})
export class MyHotelPageModule {}
