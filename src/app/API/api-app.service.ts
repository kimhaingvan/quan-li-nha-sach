import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ApiAppService {
  baseURL = "http://127.0.0.1:5000";
  constructor() {
    this.baseURL = environment ? "http://127.0.0.1:5000" : "domain.com";
  }

}
