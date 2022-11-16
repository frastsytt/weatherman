import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { allAppRoutes } from './routes';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApireqService } from './services/apireq.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglemapComponent } from './components/google-maps-demo/google-maps-demo.component'


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
