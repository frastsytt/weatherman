import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglemapComponent } from './google-maps-demo/google-maps-demo.component'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [ApireqService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
