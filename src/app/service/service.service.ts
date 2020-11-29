import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from './service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private service: Service;
  private initPromise: Promise<any>;

  constructor(private httpClient: HttpClient) {
  }

  getService(): Promise<any> {
    return new Promise(resolve=>{
      this.initData().then(()=>{
        resolve({"service": this.service});
      });
    });
  }

  private initData():Promise<any> {
    const url = 'data/service.json';
    if (this.initPromise == null) {
      this.initPromise = new Promise(resolve => {
      this.httpClient
        .get<Service>(url)
        .subscribe(apiData => {
          this.service = apiData;
          resolve();
        });
      });
    }
    return this.initPromise;
  }
}
