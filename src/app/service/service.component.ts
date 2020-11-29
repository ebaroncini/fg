import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Service } from './service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service: Service;
  
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getService().then(serviceData => {
      this.service = serviceData.service;
    })
  }

}
