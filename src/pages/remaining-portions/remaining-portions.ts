import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { DietPortions } from '../diet-portions/diet-portions';
import { Options } from '../options/options'

@Component({
  selector: 'remaining-portions',
  templateUrl: 'remaining-portions.html'
})
export class RemainingPortions {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  goToDiet() {
    this.navCtrl.setRoot(DietPortions);
  }

  openOptions(){
  	this.modalCtrl.create(Options).present();
  }

}
