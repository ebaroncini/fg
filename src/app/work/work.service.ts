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
  private initPromise: Promise<any>;

  constructor(private httpClient: HttpClient) {
  }

  getWorks(option: number, cols: number): Promise<Work[]> {
    return new Promise(resolve=>{
      this.initData().then(()=>{
        let works = this.buildWorksSublist(this.workList.works, option, cols);
        resolve( works);
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
          resolve(this.workList);
        });
      });
    }
    return this.initPromise;
  }

  private buildWorksSublist(works: Work[], side: number, cols: number): Work[] {
    if (cols === 1) {
      let offset = Math.floor(works.length / 2);
      if (side === 0) {
        return works.slice(0, offset);
      } else {
        return works.slice(offset);
      }
    } else {
      let sublist: Work[] = [];
      for(let i = 0; i < works.length; i++) {
        if (i % 2 == 0 && side === 0 || Math.abs(i % 2) == 1 && side ===1) {
          sublist.push(works[i]);
        }
      }
      return sublist.slice();
    }
  }
}
