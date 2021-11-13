import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  public showSidebar: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this.newItemEvent.emit(this.showSidebar);
    this.showSidebar = !this.showSidebar;
  }
}
