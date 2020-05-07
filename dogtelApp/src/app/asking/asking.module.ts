import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskingPageRoutingModule } from './asking-routing.module';

import { AskingPage } from './asking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskingPageRoutingModule
  ],
  declarations: [AskingPage]
})
export class AskingPageModule {}
