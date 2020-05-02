import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  role = 1;
  constructor(
    private events: Events
  ) {
    events.subscribe('role:changed', (role) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Changeed to ', role);
      this.role = role;
    });
  }

}
