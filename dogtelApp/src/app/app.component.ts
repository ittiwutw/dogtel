import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
      this.getRole();
    });
  }

  getRole() {
    this.storage.get('user').then((val) => {
      if (val) {
        console.log('user data', val);
        this.storage.get('role').then((currentRole) => {
          let userRole = 1;
          if (currentRole) {
            userRole = currentRole;
          } else {
            userRole = 1;
          }
          this.storage.set('role', userRole);
        });
      }
    });
  }

}
