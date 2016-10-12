import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RemainingPortions } from '../remaining-portions/remaining-portions'

@Component({
  selector: 'diet-portions',
  templateUrl: 'diet-portions.html'
})
export class DietPortions {

  constructor(public navCtrl: NavController) {

  }

  goToRemainingPortions(){
  	this.navCtrl.setRoot(RemainingPortions);
  }
}
