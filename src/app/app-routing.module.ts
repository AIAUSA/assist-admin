import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TwentydayDashComponent }   from './twentyday-dash/twentyday-dash.component';
import { UserdayDetailsComponent }      from './userday-details/userday-details.component';
import { DevoDashComponent }      from './devo-dash/devo-dash.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DevoDashComponent, data: {title: "Admin Home"} },
  { path: 'twentyday', component: TwentydayDashComponent, data: {title: "20 Day Challenge"}  },
  { path: 'twentyday/userdetail/:id', component: UserdayDetailsComponent, data: {title: "20 Day Challenge"}  }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
