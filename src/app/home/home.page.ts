import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{

  user: any;

  constructor
  (
    private auth: AuthService,
    private router: Router,
  ){}

  ngOnInit() 
  {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }

  logout()
  {
    this.auth.signOut();
  }

  gotoProfile()
  {
    this.router.navigate(['/profile'])
  }

  editProfile()
  {
    this.router.navigate(['/profile/edit'])
  }

  createPost()
  {
    this.router.navigate(['/create-post'])
  }

  viewPost()
  {
    this.router.navigate(['/feed'])
  }

}
