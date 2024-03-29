import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificatorService } from 'src/app/core/services/notificator.service';
import { RegistrationValidator } from 'src/app/core/validators/compare-password';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public passwordFormGroup: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly notificator: NotificatorService,
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {
    this.passwordFormGroup = this.fb.group(
      {
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)]),
        ],
        repeatPassword: ['', Validators.required],
      },
      {
        validator: RegistrationValidator.validate.bind(this),
      }
    );

    this.registerForm = this.fb.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: this.passwordFormGroup.value.password,
    });
  }

  ngOnInit() {}

  public register() {
    const user = {
      ...this.registerForm.value,
      password: this.passwordFormGroup.value.password,
    };
    this.authService.register(user).subscribe(
      () => {
        Swal.fire({
          title: 'Register successful!',
          text: 'Welcome to Huggo!',
          type: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        this.authService
          .login({ usernameOrEmail: user.username, password: user.password })
          .subscribe(() => {});
      },
      (res) => this.notificator.error(res.error.error)
    );
  }
}
