import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: '';
  password: any;
  confirmPassword: '';
  email: '';

  passwordNotMatch = false;


  constructor(private restApi: RestService, private router: Router) { }

  ngOnInit() {
  }

  register() {

    if (this.validate()) {
      const param = {
        username: this.username,
        password: this.password,
        email: this.email
      };

      this.restApi.register(param).then(data => {
        let res: any;
        res = data;
        if (res.response_code === '0001') {

          alert(res.response_description);

        } else {
          alert('สมัครสมาชิกสำเร็จ');
          this.router.navigate(['/login']);
        }
      });
    }
  }

  validate() {
    let isValidate = false;
    if (this.username && this.password && this.email && this.confirmPassword) {
      if (this.password.match(this.confirmPassword) === null) {
        this.passwordNotMatch = true;
        alert('Password Not Match');
      } else {
        isValidate = true;
      }
    } else {
      alert('กรุณาใส่ข้อมูลให้ครบถ้วน');
    }

    console.log(isValidate);

    return isValidate;
  }

}
