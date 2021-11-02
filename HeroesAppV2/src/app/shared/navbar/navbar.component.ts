import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goToRoute(route: string[]): void {
    this._router.navigate(route);
  }

  // goToHeroes(): void {
  //   this._router.navigate(['/heroes'])
  // }

  // goToAboutUs(): void {
  //   this._router.navigate(['/aboutus'])
  // }
}
