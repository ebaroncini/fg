import { Component, OnInit } from '@angular/core';
import { Philosophy } from './philosophy.model';
import { PhilosophyService } from './philosophy.service';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.css']
})
export class PhilosophyComponent implements OnInit {
  philosophy: Philosophy;

  constructor(private philosophyService: PhilosophyService) { }

  ngOnInit() {
    this.philosophyService.getPhilosophy().then(data => {
      this.philosophy = data.philosophy;
    })
  }

}
