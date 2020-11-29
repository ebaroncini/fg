import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { WorkListComponent } from './work/work-list/work-list.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', redirectTo: '/works', pathMatch: 'full' },
  { path: 'works', component: WorkComponent, children: [
    { path: '', component: WorkListComponent },
    { path: ':id', component: WorkDetailComponent },
  ] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'philosophy', component: PhilosophyComponent },
  { path: 'service', component: ServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
