import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.page.html',
  styleUrls: ['./feed-page.page.scss'],
})
export class FeedPagePage implements OnInit
{
  user: any;

  constructor
  (
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit() 
  {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }

  gotoProfile()
  {
    this.router.navigate(['/profile'])
  }

}
