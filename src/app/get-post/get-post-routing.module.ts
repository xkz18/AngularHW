import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetPostComponent } from './get-post.component';

const routes: Routes = [
  {
    path: 'c',
    component: GetPostComponent,
    children: [
      {
        path: 'child',
        component: GetPostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetPostRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
