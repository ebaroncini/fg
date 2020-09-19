import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkService } from '../work.service';
import { Work } from '../work.model';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {
  @ViewChild('animatedGrid') animatedGrid;
  workListLeft: Work[];
  workListRight: Work[];

  constructor(public workService: WorkService) { }

  ngOnInit() {
    this.workService.getWorks(0).then(works => {this.workListLeft = works;});
    this.workService.getWorks(1).then(works => {this.workListRight = works;});
  }
}
