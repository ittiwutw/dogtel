import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  role = 1;
  constructor(
    private events: Events,
    private storage: Storage,
  ) {
    events.subscribe('role:changed', (role) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Changeed to ', role);
      this.role = role;
    });
    this.getRole();
  }

  getRole() {
    this.storage.get('role').then((currentRole) => {
      // let userRole = 1;
      if (currentRole) {
        this.role = currentRole;
      } else {
        this.role = 1;
      }

    });
  }

}
