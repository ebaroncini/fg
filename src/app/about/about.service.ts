import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from './about.model';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private about: About;
  private initPromise: Promise<any>;

  constructor(private httpClient: HttpClient) {
  }

  getAbout(): Promise<any> {
    return new Promise(resolve=>{
      this.initData().then(()=>{
        resolve({"about": this.about});
      });
    });
  }

  private initData():Promise<any> {
    const url = 'data/about.json';
    if (this.initPromise == null) {
      this.initPromise = new Promise(resolve => {
      this.httpClient
        .get<About>(url)
        .subscribe(apiData => {
          this.about = apiData;
          resolve();
        });
      });
    }
    return this.initPromise;
  }
}
