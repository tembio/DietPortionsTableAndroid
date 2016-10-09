import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { DietPortions } from '../pages/diet-portions/diet-portions';
import { RemainingPortions } from '../pages/remaining-portions/remaining-portions';

import { PortionsTableService } from '../Services/portions-table.service'; 


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [PortionsTableService]
})
export class MyApp {
  rootPage = RemainingPortions;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
