import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms'

// // import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { GetPostComponent } from './get-post/get-post.component';
// // import { ApiService } from './app.service';
// import { ClockComponent } from './clock/clock.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     GetPostComponent,
//     ClockComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
//   ],
//   providers: [ ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
