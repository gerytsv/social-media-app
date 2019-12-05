import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { NotificatorService } from '../../../core/services/notificator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationValidator } from '../../../core/validators/compare-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public passwordFormGroup: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly notificator: NotificatorService,
    private readonly router: Router,
    private readonly fb: FormBuilder,
  ) {
    this.passwordFormGroup = this.fb.group(
      {
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)])
        ],
        repeatPassword: ['', Validators.required]
      },
      {
        validator: RegistrationValidator.validate.bind(this)
      }
    );

    this.registerForm = this.fb.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: this.passwordFormGroup.value.password
    });
  }

  ngOnInit() {}

  public register() {
    const user = {
      ...this.registerForm.value,
      password: this.passwordFormGroup.value.password
    };
    this.authService.register(user).subscribe(
      () => {
        this.notificator.success(`Registration successful!`);
        // then login
        this.authService
          .login({ usernameOrEmail: user.username, password: user.password })
          .subscribe(() => {
          });
      },
      (res) => this.notificator.error(res.error.error)
    );
  }
}
