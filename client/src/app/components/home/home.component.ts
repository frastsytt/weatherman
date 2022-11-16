import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApireqService } from '../../services/apireq.service';
import { GooglemapComponent } from '../google-maps-demo/google-maps-demo.component'
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  public weatherData: any;
  constructor(
    private formBuilder: FormBuilder,
    private sendApiRequest: ApireqService) { }
  ngOnInit(){
    this.weatherSearchForm = this.formBuilder.group({
      longitude: [''],
      latitude: ['']
    });
  }
  async requestAPI(formValues: any){
    this.sendApiRequest.getApi(formValues).subscribe(data => {this.weatherData = data
    console.log(data)});
  }
  onSnapshot(latlng: any){
    this.weatherSearchForm.controls['latitude'].setValue(latlng.lat);
    this.weatherSearchForm.controls['longitude'].setValue(latlng.lng);
  }
}

