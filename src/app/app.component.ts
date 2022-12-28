import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kadin-sumut';
  @ViewChild('topScrollAnchor') topScroll: ElementRef;

  onNavigate(event): any {
    this.topScroll.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  constructor(private router: Router, private elements : ElementRef) {

  }
  _router: any;

  ngOnInit(): void {


  }
}
