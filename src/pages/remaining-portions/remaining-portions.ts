import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DietPortions } from '../diet-portions/diet-portions';

@Component({
  selector: 'remaining-portions',
  templateUrl: 'remaining-portions.html'
})
export class RemainingPortions {

  constructor(public navCtrl: NavController) {

  }

  goToDiet() {
    this.navCtrl.push(DietPortions);
  }

}
