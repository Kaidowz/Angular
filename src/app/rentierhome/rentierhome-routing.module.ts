import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentierhomePage } from './rentierhome.page';

const routes: Routes = [
  {
    path: '',
    component: RentierhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentierhomePageRoutingModule {}
