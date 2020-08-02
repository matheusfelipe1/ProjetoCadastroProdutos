import { Component, OnInit } from '@angular/core';
import {HedaerService} from './hedaer.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HedaerService ) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerData.title
    }
    get icon(): string {
      return this.headerService.headerData.icon
      }
      get routerUrl(): string {
        return this.headerService.headerData.routerUrl
        }
              
}
