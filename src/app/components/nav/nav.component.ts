import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeTab = 'dashboard';

  @Output() navAction: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd || event instanceof Scroll) {
        let currentRoute = this.router.url;
        const arr = currentRoute.split('/');
        if (arr?.length) {
          this.activeTab = arr[arr.length - 1][0]?.toLowerCase();
        }
      }
    });

  }

  ngOnInit(): void { }

  routeTo(route: any) {
    this.activeTab = route;
    this.router.navigate(['/', 'app', route]);
    this.navAction.emit(route);
  }
}
