import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit 
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

  GotoFeedPage(){
    this.router.navigate(['/feed/page']);
  }

}