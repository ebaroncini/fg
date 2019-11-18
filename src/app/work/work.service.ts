import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Work } from './work.model';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private works: Work[];
  private works1: Work[] = [];
  private works2: Work[] = [];
  private initPromise: Promise<any>;

  constructor(private httpClient: HttpClient) {
  }

  getWorks(option: number): Promise<any[]> {
    return new Promise(resolve=>{
      this.initData().then(()=>{
        if (option === 0) {
          resolve( this.works1.slice());
        } else {
          resolve( this.works2.slice());
        }
      });
   });

  }

  getWork(id: string): Promise<any> {
    return new Promise(resolve=>{
      this.initData().then(()=>{
        let index = this.works.findIndex(function(element){
          return element.id === id;
        });
        let work = this.works[index];
        let previous = null;
        let next = null;
        if (index > 0) {
          previous = this.works[index - 1].id;
        }
        if (index < this.works.length - 1) {
          next = this.works[index + 1].id;
        }    
        resolve({"work": work, "previous": previous, "next": next});
      });
    });
  }

  private initData():Promise<any> {
    const url = 'data/works.json';
    if (this.initPromise == null) {
      this.initPromise = new Promise(resolve => {
      this.httpClient
        .get<Work[]>(url)
        .subscribe(apiData => {
          this.works = apiData;
          let offset = Math.floor(this.works.length / 2);
          this.works1 = this.works.slice(0, offset);
          this.works2 = this.works.slice(offset);
          console.log("<<< service");
          console.log(this.works);
          console.log(this.works1);
          console.log(this.works2);
          console.log("service >>>");
          resolve();
        });
      });
    }
    return this.initPromise;
  }
}
