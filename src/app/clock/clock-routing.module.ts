import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClockComponent } from './clock.component';

const routes: Routes = [
  {
    path: 'c',
    component: ClockComponent,
    children: [
      {
        path: 'child',
        component: ClockComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClockRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
