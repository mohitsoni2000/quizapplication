import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = {
    user: '',
    password: '',
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    if (this.users.user === 'user' && this.users.password === 'user') {
      this.router.navigate(['/dashboard']);
    }
  else if (this.users.user === 'admin' && this.users.password === 'admin') {
      this.router.navigate(['/admin']);
    }
    else {
      alert('Please Enter Vaild Password!');
      return;
    }
  }
}
