import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectHotelTypePageRoutingModule } from './select-hotel-type-routing.module';

import { SelectHotelTypePage } from './select-hotel-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectHotelTypePageRoutingModule
  ],
  declarations: [SelectHotelTypePage]
})
export class SelectHotelTypePageModule {}
