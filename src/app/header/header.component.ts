import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {AccountService} from '../_services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private accountService: AccountService, private router: Router) { }

  isMenuCollapsed = true;

  ngOnInit(): void {
    this.userSub = this.accountService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(user);
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('auth');
  }

}
