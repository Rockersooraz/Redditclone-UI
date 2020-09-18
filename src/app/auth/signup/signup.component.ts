import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignupRequestPayload} from './signup-request.payload';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupRequsetPayload: SignupRequestPayload;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.signupRequsetPayload = {
      username: '',
      password: '',
      email: ''
    };
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  signUp($event) {
    console.log($event);
    console.log(this.signupForm);
    this.signupRequsetPayload.username = this.signupForm.get('username').value;
    this.signupRequsetPayload.email = this.signupForm.get('email').value;
    this.signupRequsetPayload.password = this.signupForm.get('password').value;
    this.authService.signUp(this.signupRequsetPayload).subscribe(data => {
      this.router.navigate(['/login'], {queryParams: {registered: true}});
      console.log(data);
    }, () => {
      this.toastr.error('Registration Failed Please try again');
    });
    this.signupForm.reset();
  }
}
