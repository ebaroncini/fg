import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
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

  constructor(public workService: WorkService) { }

  ngOnInit() {
    console.log("LIST onInit -1");
    //this.workListLeft = this.workService.getWorks(0);
    console.log("LIST onInit -2");
    //this.workListRight = this.workService.getWorks(1);
    console.log("LIST onInit -3");
  }

  ngAfterViewInit(){
    setTimeout(() => {
      console.log( this.animatedGrid.nativeElement);
    }, 500);
  }
}
