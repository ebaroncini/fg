import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WorkService } from '../work.service';
import { Work } from '../work.model';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit, AfterViewInit {
  @ViewChild('animatedGrid') animatedGrid;
  workListLeft: Work[];
  workListRight: Work[];

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.workListLeft = this.workService.getWorks(0);
    this.workListRight = this.workService.getWorks(1);
  }

  ngAfterViewInit(){
    console.log(this.animatedGrid);
    setTimeout(() => {
      console.log( this.animatedGrid.nativeElement);
    }, 500);
  }
}
