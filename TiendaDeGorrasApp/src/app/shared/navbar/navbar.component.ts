import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  public showSidebar: boolean = false;

  constructor(private _router : Router) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this.newItemEvent.emit(this.showSidebar);
    this.showSidebar = !this.showSidebar;
  }

  irARuta(ruta : string[]) : Promise<Boolean> {
    return this._router.navigate(ruta);
  }
}
