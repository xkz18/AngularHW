import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPostRoutingModule } from './get-post-routing.module';
import { GetPostComponent } from './get-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, GetPostRoutingModule, FormsModule],
  declarations: [GetPostComponent],
})
export class GetPostModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
