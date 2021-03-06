import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginModel } from '../../models/user.login.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  failedLogin: boolean = false;
  showPassword: boolean = false;
  typeOfInput: string = 'password';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginInfo.valueChanges.subscribe(value => {
      this.failedLogin = false;
    })
  }

  get userName() {
    return this.loginInfo.get('userName');
  }
  get password() {
    return this.loginInfo.get('password')
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
    this.showPassword ? this.typeOfInput = "text" : this.typeOfInput = "password";
  }

  onSubmit() {
    this.loginInfo.markAllAsTouched();
    if (this.loginInfo.valid) {

      this.authenticationService.login(this.userName.value, this.password.value).subscribe((loggedUser: UserLoginModel) => {
          this.authenticationService.setLoggedInUser(loggedUser);
          this.activatedRoute.queryParams.subscribe(data => {
            const url = data['returnUrl'] ? data['returnUrl'] : 'home';
            this.router.navigate([url]);
          });
      },() => {
        this.failedLogin = true;
      });
    }

  }

}
