import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';
import { About } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: About;
  
  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.getAbout().then(aboutData => {
      this.about = aboutData.about;
    })
  }

}
