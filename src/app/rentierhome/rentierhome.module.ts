import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentierhomePageRoutingModule } from './rentierhome-routing.module';

import { RentierhomePage } from './rentierhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentierhomePageRoutingModule
  ],
  declarations: [RentierhomePage]
})
export class RentierhomePageModule {}
