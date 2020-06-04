import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.page.html',
  styleUrls: ['./add-dog.page.scss'],
})
export class AddDogPage implements OnInit {


  dogData = {
    userId: 0,
    dogName: '',
    sex: '',
    birthDate: '',
    species: '',
    color: '',
    detail: '',
    dogImgUrl: '',
    dogSize: '',
    vaccine: '',
    habit: ''
  };
  base64Img: any;
  dogMaster = [];

  isDisabled = false;

  constructor(
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
    private camera: Camera,
  ) { }

  ngOnInit() {
    this.loadDogMaster();
  }

  loadDogMaster() {
    this.restApi.getDogMaster().then(res => {
      console.log(res);
      let result: any;
      result = res;

      this.dogMaster = result.data.result;
      console.log(this.dogMaster);
    });
  }

  onClickSave() {
    if (this.validate()) {
      this.isDisabled = true;
      let selectedDog: any;
      selectedDog = this.dogData.species;

      this.dogData.species = selectedDog.dogSpecies;
      this.dogData.dogSize = selectedDog.dogSize;
      console.log(this.dogData);
      this.storage.get('user').then((user) => {
        this.dogData.userId = user[0].id;
        this.restApi.saveDog(this.dogData).then(res => {
          console.log(res);
          alert('บันทึกข้อมูลสำเร็จ');
          this.router.navigateByUrl('/tabs/account');
        });
      });
    }
  }

  validate() {
    let isValidate = false;
    if (this.dogData.sex === ''
      || this.dogData.birthDate === ''
      || this.dogData.dogName === ''
      || this.dogData.birthDate === ''
      || this.dogData.vaccine === ''
      || this.dogData.species === ''
      || this.dogData.color === ''
      || this.dogData.detail === ''
      || this.dogData.habit === ''
      || this.dogData.dogImgUrl === '') {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {
      isValidate = true;
    }
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
      this.dogData.dogImgUrl = imageData;
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
