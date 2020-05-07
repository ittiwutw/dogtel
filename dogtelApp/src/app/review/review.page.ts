import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  stars = [];
  review = {
    userId: 0,
    hotelId: 0,
    stars: 0,
    review: ''
  };
  hotel: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.hotel = JSON.parse(params.hotel);

      console.log(this.hotel);
    });
  }

  ngOnInit() {
  }

  changeStar() {
    this.stars = [];
    for (let i = 0; i < this.review.stars; i++) {
      this.stars.push(1);
    }
    console.log(this.stars);
  }

  onClickSave() {
    this.storage.get('user').then((user) => {
      this.review.userId = user[0].id;
      this.review.hotelId = this.hotel.hotelId;
      this.restApi.saveReview(this.review).then(res => {
        console.log(res);
        alert('บันทึกข้อมูลสำเร็จ');
        this.router.navigateByUrl('/tabs/tab1');
      });
    });
  }

}
