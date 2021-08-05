import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import jwt_decode from "jwt-decode";
import { NavigationExtras, Router } from '@angular/router';

interface JwtToken {
  sub: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: MenuItem[] = [];
  userName: String = "";
  
  
  title = 'angular-frontend';

  constructor(public router: Router) {
    
  }
  
  
  ngOnInit(){
    this.initMenuItems();
    // validate the jwt here. 
    this.validateJwt();

  }

  validateJwt(){
    const tokenName = "#token="
    const hash = window.location.hash;
    
    if (hash && hash.indexOf(tokenName)>=0){ 
      // if there is token in the query string, just set that , and then bring the route without the token. 
      const token = hash.replace(tokenName, "").split("&")[0];
      localStorage.setItem("jwt", token);
      this.router.navigate(['/']);

      // and for each new token set, we need to retrieve user info as well. 
      const decoded = jwt_decode<JwtToken>(token);
      localStorage.setItem("sub", decoded.sub);
      this.userName = decoded.sub;
    }
  }

  initMenuItems(){
    this.items= [
      {
          label: 'Home', 
          icon: 'pi pi-fw pi-home', 
          routerLink: '/'
      },
       {
          label: 'Public Content', 
          icon: 'pi pi-fw pi-volume-up', 
          routerLink: '/public'
      },
       {
          label: 'Protected Get', 
          icon: 'pi pi-fw pi-key', 
          routerLink: '/protected/get'
      },
       {
          label: 'Protected Put', 
          icon: 'pi pi-fw pi-lock', 
          routerLink: '/protected/put'
      },
       {
          label: 'Admin Get', 
          icon: 'pi pi-fw pi-user', 
          routerLink: '/protected/admin'
      },
       {
          label: 'Logout', 
          icon: 'pi pi-fw pi-sign-out',
          routerLink: '/logout'
      },

  ];
    
  }
}
