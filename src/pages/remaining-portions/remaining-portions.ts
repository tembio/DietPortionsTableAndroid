import { ViewChild, Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DietPortions } from '../diet-portions/diet-portions';
import { Options } from '../options/options'

@Component({
  selector: 'remaining-portions',
  templateUrl: 'remaining-portions.html'
})
export class RemainingPortions {

  @ViewChild('fab') fabMenu;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  goToDiet() {
    this.navCtrl.setRoot(DietPortions);
  }

  openOptions(){
  	this.fabMenu.close();
  	this.modalCtrl.create(Options).present();
  }

}
