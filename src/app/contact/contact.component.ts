import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  phone = '+54 9 11 57800028';
  email = 'flavia.giustino@gmail.com';
  latitud = '-34.5766165';
  longitud = '-58.4557561';
  
  constructor() { }

  ngOnInit() {
  }

}
