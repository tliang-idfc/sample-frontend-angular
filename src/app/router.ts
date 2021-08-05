import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ProtectGetComponent } from './protect-get/protect-get.component';
import { ProtectPutComponent } from './protect-put/protect-put.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
    
    {
        path: "",
        component: HomeComponent,
      },

  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "public",
    component: PublicComponent,
  },
  {
    path: "protected/get",
    component: ProtectGetComponent,
  }, 
  {
    path: "protected/put",
    component: ProtectPutComponent,
  },
  {
    path: "protected/admin",
    component: AdminComponent,
  },
  {
    path: "logout",
    component: LogoutComponent,
  },
  {
    path: "error",
    component: ErrorComponent,
  },
  
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class MyRoutingModule {} ;