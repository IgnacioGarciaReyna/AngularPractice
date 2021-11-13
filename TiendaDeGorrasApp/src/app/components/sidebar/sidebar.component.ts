import { EventEmitter,Component, OnInit, Output } from '@angular/core';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  public showSidebar: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this.newItemEvent.emit(this.showSidebar);
  }

}
