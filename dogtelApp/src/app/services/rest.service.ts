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

}
