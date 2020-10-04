import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GittitComponent } from './gittit/gittit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GittitComponent,
        data: { title: 'Gittit' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GittitRoutingModule {}
