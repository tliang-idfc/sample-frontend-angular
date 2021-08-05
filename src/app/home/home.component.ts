import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: String | null | undefined;

  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("sub");
  }

}
