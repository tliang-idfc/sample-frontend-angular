import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import ApplicationService from '../ApplicationService';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-protect-put',
  templateUrl: './protect-put.component.html',
  styleUrls: ['./protect-put.component.css']
})
export class ProtectPutComponent implements OnInit {
  data: string  = '';
  constructor() { }

  ngOnInit(): void {
  }
  handleClick(){
    ApplicationService.putSample(this.data)
  }

}
