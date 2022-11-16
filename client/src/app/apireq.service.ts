import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApireqService {
  baseURL: string = "http://localhost:7280/";
  constructor(private http: HttpClient) { }

  getApi(data: any){
    return this.http.post(this.baseURL,data);
  }
}
