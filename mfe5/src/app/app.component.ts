import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mfe5-element',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mfe5';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl(location.pathname.substr(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1));
    });
  }
}
