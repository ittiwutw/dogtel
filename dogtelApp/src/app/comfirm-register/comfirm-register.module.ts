import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComfirmRegisterPageRoutingModule } from './comfirm-register-routing.module';

import { ComfirmRegisterPage } from './comfirm-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComfirmRegisterPageRoutingModule
  ],
  declarations: [ComfirmRegisterPage]
})
export class ComfirmRegisterPageModule {}
