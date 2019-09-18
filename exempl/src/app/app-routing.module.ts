import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { title: 'MainComponent' }
  },
  {
    path: 'accordion',
    component: AccordionComponent,
    data: { title: 'AccordionComponent' }
  },
  {
    path: 'service',
    component: ServiceComponent,
    data: { title: 'AccordionComponent' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
