import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bot } from '../models/Ibot';
@Injectable({
  providedIn: 'root'
})
export class HsnService {
  constructor(private httpSvc: HttpClient) {
    this.fetchHsn();
  }
  fetchHsn() {
    return this.httpSvc.get<Bot.IHSNCode[]>('assets/hsnCodes.json');
  }
}
