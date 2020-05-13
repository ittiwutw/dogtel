import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email = '';
  step = 1;
  password1 = '';
  password2 = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClickNext() {
    if (this.step === 1) {
      if (this.validateEmail(this.email) && this.validatePassword()) {
        this.step++;
      } else {
        alert('กรุณากรอก Email ให้ถูกต้อง');
      }
    } else {
      this.step++;
    }

  }

  onClickFinish() {
    alert('ตั้งค่ารหัสใหม่สำเร็จ');
    this.router.navigate(['/login']);
  }

  validatePassword() {
    let isValidate = false;
    if (this.password1 !== this.password2) {
      alert('กรุณาระบุ password ให้ตรงกัน');
    } else {
      isValidate = true;
    }

    return isValidate;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
