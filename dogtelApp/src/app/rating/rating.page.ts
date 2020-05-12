import { Component, OnInit } from '@angular/core';

import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  reviewlist = [];
  allReviewList = [];
  showRate = '';
  rating = 0;
  stars = [];
  star5 = 0;
  star4 = 0;
  star3 = 0;
  star2 = 0;
  star1 = 0;
  constructor(
    private router: Router,
    private restApi: RestService,
    private storage: Storage,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.storage.get('user').then((user) => {
      const param = {
        userId: user[0].id
      };

      this.restApi.getHotelByUserId(param).then(res => {
        let result: any;
        result = res;
        const paramReview = {
          hotelId: result.data.result[0].id
        };
        this.restApi.getReviewByhotelId(paramReview).then(reviews => {
          let resultReviews: any;
          resultReviews = reviews;
          this.reviewlist = resultReviews.data.result;
          this.allReviewList = resultReviews.data.result;
          console.log(this.reviewlist);
          this.calculateRating();
        });
      });
    });
  }

  calculateRating() {
    this.star5 = 0;
    this.star4 = 0;
    this.star3 = 0;
    this.star2 = 0;
    this.star1 = 0;

    this.reviewlist.forEach(review => {
      if (review.star === 5) {
        this.star5++;
      } else if (review.star === 4) {
        this.star4++;
      } else if (review.star === 3) {
        this.star3++;
      } else if (review.star === 2) {
        this.star2++;
      } else if (review.star === 1) {
        this.star1++;
      }
    });

    this.rating = (((5 * this.star5) + (4 * this.star4) + (3 * this.star3) + (2 * this.star2) + (1 * this.star1)) /
      (this.star5 + this.star4 + this.star3 + this.star2 + this.star1));

    this.showRate = this.rating.toFixed(1);
    console.log(this.rating);

    for (let i = 0; i < Math.ceil(this.rating); i++) {
      this.stars.push(1);
    }
  }

  calStar(star) {
    const reviewStar = [];
    for (let i = 0; i < star; i++) {
      reviewStar.push(1);
    }

    return reviewStar;
  }

  onClickFillterStar(star) {
    if (star === 0) {
      this.reviewlist = this.allReviewList;
    } else {
      this.reviewlist = this.allReviewList.filter((review) => {
        return review.star === star;
      });
    }
  }

}
