import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockRoutingModule } from './clock-routing.module';
import { ClockComponent } from './clock.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, ClockRoutingModule, FormsModule],
  declarations: [ClockComponent],
})
export class ClockModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
