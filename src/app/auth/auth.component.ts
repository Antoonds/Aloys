import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AccountService} from '../_services/account.service';
import {Login} from '../_models/login';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  errors: string[] = null;
  login: Login = {
    username: '',
    password: ''
  };
  authObs: Observable<any>;
  constructor(private accountService: AccountService, private router: Router) {}

  onSwitchMode(): any {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.login.username = form.value.username;
    this.login.password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      this.authObs = this.accountService.login(this.login);
    } else {
      this.authObs = this.accountService.register(this.login);
    }

    this.authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['requests']);
      },
      errorMessage => {
        console.log(errorMessage.error);
        this.errors = errorMessage.error;
        this.isLoading = false;
      }
    );

    form.reset();
  }

  ngOnInit(): void {
  }

}
