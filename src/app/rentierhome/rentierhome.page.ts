import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentierhome',
  templateUrl: './rentierhome.page.html',
  styleUrls: ['./rentierhome.page.scss'],
})
export class RentierhomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToLogin() {
    this.router.navigate(['/login']);
  }
  
  GoToFeed() {
    this.router.navigate(['/feed']);
  }
}
