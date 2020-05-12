import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // apiUrl = 'http://localhost:8080/';
  apiUrl = 'https://dogtelservice.yuzudigital.com/';

  constructor(private http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  login(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'login', param, { headers: header })
        .subscribe(res => {

          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  register(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'registerUser', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getHotelList() {
    return new Promise((resolve, reject) => {

      this.http.get(this.apiUrl + 'getHotelList')
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  searchHotel(searchCondition) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'searchHotel', searchCondition, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  bookHotel(param) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'bookHotel', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getBookingHotelByUserId(param) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getBookingByUserId', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  updateBookingStatus(param) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'updateBookingStatus', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getHotelBookingByHotelOwnerId(param) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getHotelBookingByHotelOwnerId', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveHotel(param) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'saveHotel', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveDog(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'saveDog', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getDogByUserId(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getDogByUserId', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getHotelByUserId(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getHotelByUserId', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  saveRoom(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'saveRoom', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getRoomByhotelId(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getRoomByhotelId', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  saveReview(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'saveReview', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getReviewByhotelId(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getReviewByhotelId', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  saveAsking(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'saveAsking', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getAskingByHotelId(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getAskingByHotelId', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  saveAnswer(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'saveAnswer', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getAnswerByUserId(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getAnswerByUserId', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getNotification(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getNotification', param, { headers: header })
        .subscribe(res => {
          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  getDogMaster() {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'getDogMaster', {}, { headers: header })
        .subscribe(res => {
          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

}
