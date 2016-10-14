import { Component } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';
import { PortionsTableService } from '../../Services/portions-table.service'; 


@Component({
  templateUrl: 'options.html',
  providers : [PortionsTableService]
})
export class Options {

  restartPortions : boolean;

  constructor(public viewCtrl: ViewController, public toastCtrl: ToastController,private portionsTableService: PortionsTableService) {
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
      duration: 1500
    });

    doneMessage.present();
  }

}
