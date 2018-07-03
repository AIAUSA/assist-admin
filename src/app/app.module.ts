import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { TwentydayDashComponent } from './twentyday-dash/twentyday-dash.component';
import { DevoDashComponent } from './devo-dash/devo-dash.component';
import { UserdayDetailsComponent } from './userday-details/userday-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    TwentydayDashComponent,
    DevoDashComponent,
    UserdayDetailsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
