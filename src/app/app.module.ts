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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
