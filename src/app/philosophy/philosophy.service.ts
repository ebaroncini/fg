import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Philosophy } from './philosophy.model';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class PhilosophyService {
  private philosophy: Philosophy;
  private initPromise: Promise<any>;

  constructor(private httpClient: HttpClient) {
  }

  getPhilosophy(): Promise<any> {
    return new Promise(resolve=>{
      this.initData().then(()=>{
        resolve({"philosophy": this.philosophy});
      });
    });
  }

  private initData():Promise<any> {
    const url = 'data/philosophy.json';
    if (this.initPromise == null) {
      this.initPromise = new Promise(resolve => {
      this.httpClient
        .get<Philosophy>(url)
        .subscribe(apiData => {
          this.philosophy = apiData;
          console.log("<<< service");
          console.log(this.philosophy);
          console.log("service >>>");
          resolve();
        });
      });
    }
    return this.initPromise;
  }
}
