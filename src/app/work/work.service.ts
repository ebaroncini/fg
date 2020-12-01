import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Work } from './work.model';
import { resolve } from 'url';
import { WorkList } from './worklist.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private workList: WorkList;
  private works1: Work[] = [];
  private works2: Work[] = [];
  private initPromise: Promise<any>;

  constructor(private httpClient: HttpClient) {
  }

  getWorks(option: number): Promise<Work[]> {
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
        let index = this.workList.works.findIndex(function(element){
          return element.id === id;
        });
        let work = this.workList.works[index];
        let previous = null;
        let next = null;
        if (index > 0) {
          previous = this.workList.works[index - 1].id;
        }
        if (index < this.workList.works.length - 1) {
          next = this.workList.works[index + 1].id;
        }    
        resolve({"work": work, "previous": previous, "next": next});
      });
    });
  }

  getWorkList(): Promise<WorkList> {
    return new Promise(resolve=>{
      this.initData().then(()=>{
          resolve( this.workList);
      });
   });
  }

  private initData():Promise<any> {
    const url = 'data/works.json';
    if (this.initPromise == null) {
      this.initPromise = new Promise(resolve => {
      this.httpClient
        .get<WorkList>(url)
        .subscribe(apiData => {
          this.workList = apiData;
          let offset = Math.floor(this.workList.works.length / 2);
          this.works1 = this.workList.works.slice(0, offset);
          this.works2 = this.workList.works.slice(offset);
          resolve();
        });
      });
    }
    return this.initPromise;
  }
}
