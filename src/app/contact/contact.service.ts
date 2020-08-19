import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contact: Contact;
  private initPromise: Promise<any>;

  constructor(private httpClient: HttpClient) {
  }

  getContact(): Promise<any> {
    return new Promise(resolve=>{
      this.initData().then(()=>{
        resolve({"contact": this.contact});
      });
    });
  }

  private initData():Promise<any> {
    const url = 'data/contact.json';
    if (this.initPromise == null) {
      this.initPromise = new Promise(resolve => {
      this.httpClient
        .get<Contact>(url)
        .subscribe(apiData => {
          this.contact = apiData;
          console.log("<<< service");
          console.log(this.contact);
          console.log("service >>>");
          resolve();
        });
      });
    }
    return this.initPromise;
  }
}
