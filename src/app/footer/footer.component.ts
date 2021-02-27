import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/contact.model';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contact: Contact;
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact().then(data => {
      this.contact = data.contact;
    })
  }
}
