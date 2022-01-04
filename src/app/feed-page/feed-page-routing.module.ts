import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedPagePage } from './feed-page.page';

const routes: Routes = [
  {
    path: '',
    component: FeedPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedPagePageRoutingModule {}
