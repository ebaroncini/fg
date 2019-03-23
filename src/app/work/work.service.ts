import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Work } from './work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  works: Work[];
  works1: Work[] = [];
  works2: Work[] = [];
  currentWork: any = {"work": new Work(null, null, null, null, null, null, null), "previous": null, "next": null};
  currentId: string;
  isReady = false;

  constructor(private httpClient: HttpClient) {
      const url = 'data/works.json';
      this.httpClient
        .get<Work[]>(url)
        .subscribe(apiData => {
          this.works = apiData;
          let offset = Math.floor(this.works.length / 2);
          this.works1 = this.works.slice(0, offset);
          this.works2 = this.works.slice(offset);
          if (this.currentId != null) {
            this.currentWork = this.getWork(this.currentId);
          }
          this.isReady = true;
          console.log("<<< service");
          console.log(this.works);
          console.log(this.works1);
          console.log(this.works2);
          console.log(this.currentId);
          console.log(this.currentWork);
          console.log(this.isReady);
          console.log("service >>>");
        });
  }

  setCurrentId(id: string) {
    this.currentId = id;
    if (this.isReady) {
      this.currentWork = this.getWork(this.currentId);
    }
  }

  private getWorks(option: number) {
    console.log("SERVICE getWorks");
    if (option === 0) {
      return this.works1.slice();
    } else {
      return this.works2.slice();
    }
  }

  private getWork(id: string) {
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
    return {"work": work, "previous": previous, "next": next};
  }
}
