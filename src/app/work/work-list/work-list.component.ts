import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkService } from '../work.service';
import { Work } from '../work.model';
import { WorkList } from '../worklist.model';
import { ResizeService } from 'src/app/size-detector/resize.service';
import { SCREEN_SIZE } from 'src/app/size-detector/screen-size.enum';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {
  @ViewChild('animatedGrid') animatedGrid;
  workListLeft: Work[];
  workListRight: Work[];
  workList: WorkList;
  currentCols: number = 0;

  constructor(public workService: WorkService, private resizeService: ResizeService) { 
    // subscribe to the size change stream
    this.resizeService.onResize$.subscribe(size => {
      this.refreshLists(size);
    });
  }

  ngOnInit() {
    this.workService.getWorkList().then(workList => {this.workList = workList;});
    this.refreshLists(this.resizeService.getCurrentSize());
  }

  private refreshLists(size: SCREEN_SIZE) {
    let cols = 2;
    if (size === SCREEN_SIZE.XS) {
      cols = 1;
    }
    if (this.currentCols != cols) {
      this.workService.getWorks(0, cols).then(works => {this.workListLeft = works;});
      this.workService.getWorks(1, cols).then(works => {this.workListRight = works;});
      this.currentCols = cols;
    }
  }
}
