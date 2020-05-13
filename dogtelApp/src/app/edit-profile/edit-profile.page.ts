import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  username: '';
  email: '';
  userId: 0;
  tel: '';
  userImgUrl: '';
  base64Img: any;

  constructor(
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
    private camera: Camera,
  ) {
    this.storage.get('user').then((user) => {
      console.log(user);
      this.username = user[0].username;
      this.email = user[0].email;
      this.userId = user[0].id;
      this.tel = user[0].tel;
      this.userImgUrl = user[0].userImgUrl;
    });

  }

  ngOnInit() {
  }

  onClickSave() {
    if (this.validate()) {
      const param = {
        userId: this.userId,
        email: this.email,
        tel: this.tel,
        userImgUrl: this.userImgUrl
      };

      this.restApi.register(param).then(data => {
        let res: any;
        res = data;
        if (res.response_code === '0001') {

          alert(res.response_description);

        } else {
          alert('แก้ไขข้อมูลสำเร็จแล้ว');
          this.router.navigate(['/tabs/account']);
        }
      });
    }
  }

  validate() {
    let isValidate = false;
    console.log(this.tel.length);
    if (this.tel.length < 10) {
      alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง');
    } else {
      isValidate = true;
    }


    console.log(isValidate);

    return isValidate;
  }

  pickImage() {
    // this.completePayment();
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Img = 'data:image/jpeg;base64,' + imageData;
      this.userImgUrl = imageData;
      console.log(this.base64Img);
      // this.cropImage(imageData)
      if (this.base64Img) {
        // this.completePayment();
      }
      // alert(base64Image);
    }, (err) => {
      // Handle error
    });
  }

}
