import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showForm!: boolean;
  subscription!: Subscription;

  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showForm = value);
  }
  
  toggleAddTask(){
    this.uiService.toggleForm();
  }
  
  hasRoute(route: string){ 
    return this.router.url === route;
  }
}

