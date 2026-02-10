import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../interfaces/login-dto';
import { LoginServices } from '../../services/login.services';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private loginServices = inject(LoginServices);

  username: string = '';
  password: string = '';

  login() {
    console.log('Usuario:', this.username);
    console.log('Password:', this.password);

    if (this.username !== '' && this.password !== '') {
      const objectRequest: LoginComponent = {
        username: this.username,
        password: this.password 
      };

      this.loginServices.doLogin(objectRequest).subscribe(entry => {
        if (entry) {
          console.log("login exitoso");
        }
      });
    }

  }
}
