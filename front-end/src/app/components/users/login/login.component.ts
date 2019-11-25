import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { NotificatorService } from '../../../core/services/notificator.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly notificator: NotificatorService,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      usernameOrEmail: [
        '',
        Validators.compose([Validators.required])
      ],
      password: [
        '',
        Validators.compose([Validators.required])
      ]
    });
  }

  ngOnInit() {}

  public login() {
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/']);
        this.notificator.success('Loggin Succesfull');
      },
      () => this.notificator.error(`Invalid username/password!`)
    );
  }

}
