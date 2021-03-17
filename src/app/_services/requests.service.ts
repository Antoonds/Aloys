import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRequests () {
    return this.http.get(this.baseUrl + 'fillin/get-requests');
  }

  addFillIn(fillIn) {
    console.log(fillIn);
    return this.http.put(this.baseUrl + 'fillin/add-fillin', fillIn);

  }
}
