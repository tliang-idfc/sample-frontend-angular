import { Component, OnInit } from '@angular/core';
import ApplicationService from '../ApplicationService';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  data: String | undefined;

  constructor() { }

  ngOnInit(): void {
    ApplicationService.getPublicContent().then(response=>this.data = response.data);
  }

}
