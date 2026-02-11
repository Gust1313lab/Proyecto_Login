import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../interfaces/login-dto';
import { LoginServices } from '../../services/login.services';
//inmportamos material forms
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private loginServices = inject(LoginServices);

  username: string = '';
  password: string = '';

  login() {

    // 🔹 Validar espacios en blanco
    if (this.username.trim() === '' || this.password.trim() === '') {
      console.error("Usuario y contraseña son obligatorios");
      return;
    }

    // 🔹 Longitud mínima
    if (this.username.length < 4) {
      console.error("El usuario debe tener al menos 4 caracteres");
      return;
    }

    if (this.password.length < 6) {
      console.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    const objectRequest: LoginComponent = {
      username: this.username,
      password: this.password
    };

    this.loginServices.doLogin(objectRequest).subscribe({

      next: (entry) => {
        console.log("Login exitoso");
      },

      error: (err) => {
        console.error("Credenciales incorrectas o error del servidor", err);
      }

    });
  }
}
