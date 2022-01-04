import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedPagePageRoutingModule } from './feed-page-routing.module';

import { FeedPagePage } from './feed-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPagePageRoutingModule
  ],
  declarations: [FeedPagePage]
})
export class FeedPagePageModule {}
