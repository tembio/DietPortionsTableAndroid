import { Component } from '@angular/core';
import { ViewController, NavController, ToastController, Events } from 'ionic-angular';
import { PortionsTableService } from '../../Services/portions-table.service'; 

@Component({
  templateUrl: 'options.html',
  providers : [PortionsTableService]
})
export class Options {

  restartPortions : boolean;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public toastCtrl: ToastController, public events: Events, private portionsTableService: PortionsTableService) {
  	this.restartPortions = this.portionsTableService.getOptions().restartPortions;
  }

  saveOptions(){
  	this.restartPortions = !this.restartPortions;
    this.portionsTableService.setOptions({restartPortions:this.restartPortions});
  }

  forceRestart(){ 
    this.portionsTableService.restartPortions();

    let doneMessage = this.toastCtrl.create({
      message: 'Porciones reiniciadas',
      duration: 1500,
    });

    doneMessage.present();

    this.events.publish('refreshPortions');
    
    this.viewCtrl.dismiss();
  }

}
