import { Component, OnInit } from '@angular/core';
import ApplicationService from '../ApplicationService';

@Component({
  selector: 'app-protect-get',
  templateUrl: './protect-get.component.html',
  styleUrls: ['./protect-get.component.css']
})
export class ProtectGetComponent implements OnInit {
  data: String | undefined;

  constructor() { }

  ngOnInit(): void {
    ApplicationService.getSample().then(response=>this.data = response.data);
  }
}
