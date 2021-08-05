import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyRoutingModule } from './router';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import { PublicComponent } from './public/public.component';
import { ProtectGetComponent } from './protect-get/protect-get.component';
import { HomeComponent } from './home/home.component';
import { ProtectPutComponent } from './protect-put/protect-put.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    ProtectGetComponent,
    HomeComponent,
    ProtectPutComponent,
    AdminComponent,
    LogoutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
