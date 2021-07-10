import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ApiAppService {
  baseURL = "";
  constructor() {
    this.baseURL = environment ?"domain.com" : "http://127.0.0.1:5000";
  }

}
