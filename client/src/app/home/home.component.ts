import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApireqService } from '../apireq.service';

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
    this.sendApiRequest.getApi(formValues).subscribe(data => {this.weatherData = data});
  }
}
