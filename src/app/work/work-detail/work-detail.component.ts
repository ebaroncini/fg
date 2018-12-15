import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WorkService } from '../work.service';
import { Work } from '../work.model';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  id: string;
  work: Work;
  previous: string;
  next: string;

  constructor(private workService: WorkService,
    private route: ActivatedRoute) {
  }

ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        let workData = this.workService.getWork(this.id);
        this.work = workData.work;
        this.previous = workData.previous;
        this.next = workData.next;
      }
    );
  }
}
