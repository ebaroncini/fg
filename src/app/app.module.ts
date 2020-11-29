import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkComponent } from './work/work.component';
import { WorkListComponent } from './work/work-list/work-list.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';

// import third-party module
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkComponent,
    WorkListComponent,
    WorkDetailComponent,
    FooterComponent,
    AboutComponent,
    PhilosophyComponent,
    ContactComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // import module here
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
