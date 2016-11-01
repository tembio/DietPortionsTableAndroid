import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { RemainingPortions } from '../pages/remaining-portions/remaining-portions';
import { PortionsTableService } from '../Services/portions-table.service'; 
import { Intro } from '../pages/intro/intro';



@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [PortionsTableService]
})
export class MyApp {

  rootPage; 

  constructor(platform: Platform, public portionsTableService: PortionsTableService ) {
    if( localStorage.getItem("tutorialDone") !== "true"){
      this.rootPage = Intro;
      localStorage.setItem("tutorialDone","true");
    }else
      this.rootPage = RemainingPortions;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });

    platform.resume.subscribe(() => {
      this.portionsTableService.setRemainingPortions(this.portionsTableService.getRemainingPortions());
    });
    
  }
}
