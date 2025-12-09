import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      console.log('Debes llenar usuario y contraseña.');
      return;
    }

    const { user, password } = this.loginForm.value;
    console.log(`Login correcto. Usuario: ${user}`);
    this.router.navigate(['sucursales']);

  }
}
