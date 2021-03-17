import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {User} from '../_models/user';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }

  login(model: any): any {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        console.log(response.username);
        this.setCurrentUser(response);
      })
    );
  }

  autoLogin(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    const token = user.token;
    const username = user.username;
    if (!user){
      return;
    }

    const loadedUser: User = {
      username,
      token,

    };

    if (loadedUser.token){
      this.setCurrentUser(loadedUser);
    }


  }

  register(model: any): any {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: any) => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.user.next(null);
  }

  setCurrentUser(user: User): any{
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user.roles);
    this.user.next(user);
  }


  getDecodedToken(token): any {
    return JSON.parse(atob(token.split('.')[1]));
  }
}
