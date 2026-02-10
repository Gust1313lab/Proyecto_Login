import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginComponent } from '../interfaces/login-dto';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  
  constructor() { }

  doLogin (input: LoginComponent): Observable<Boolean> {
    return of(true);
  }

}
