import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {

  base64Img: any;

  roomData = {
    roomName: '',
    detail: '',
    sizeLength: '',
    sizeWidth: '',
    sizeHeight: '',
    price: '',
    hotelId: 0,
    roomImgUrl: ''
  };

  constructor(
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
    private camera: Camera,
    public activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.roomData.hotelId = JSON.parse(params.hotelId);
    });
  }

  ngOnInit() {
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
      this.roomData.roomImgUrl = imageData;
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

  onClickSave() {
    this.restApi.saveRoom(this.roomData).then(res => {
      console.log(res);
      alert('บันทึกข้อมูลสำเร็จ');
      this.router.navigateByUrl('/tabs/account');
    });
  }

}
