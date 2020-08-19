import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact().then(data => {
      this.contact = data.contact;
    })
  }

}
