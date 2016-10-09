import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { PortionsTableService } from '../Services/portions-table.service'; 


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [PortionsTableService]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
