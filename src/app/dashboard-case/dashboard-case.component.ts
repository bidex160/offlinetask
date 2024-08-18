import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-case',
  templateUrl: './dashboard-case.component.html',
  styleUrls: ['./dashboard-case.component.scss'],
})
export class DashboardCaseComponent implements OnInit {
  sidebarExpanded: boolean = false;

  loading: boolean = false
  constructor() {} 
  ngOnInit(): void {}


  actionClicked() {
    this.sidebarExpanded = false;
  }

}
