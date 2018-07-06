import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TwentydayDashComponent }   from './twentyday-dash/twentyday-dash.component';
import { UserdayDetailsComponent }      from './userday-details/userday-details.component';
import { DevoDashComponent }      from './devo-dash/devo-dash.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DevoDashComponent },
  { path: 'twentyday', component: TwentydayDashComponent },
  { path: 'userdetail/:id', component: UserdayDetailsComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
