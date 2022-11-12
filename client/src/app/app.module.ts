import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { allAppRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApireqService } from './apireq.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApireqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
