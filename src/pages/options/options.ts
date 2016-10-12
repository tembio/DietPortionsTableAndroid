import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { PortionsTableService } from '../../Services/portions-table.service'; 


@Component({
  templateUrl: 'options.html',
  providers : [PortionsTableService]
})
export class Options {

  restartPortions : boolean;
  portionsTableService : PortionsTableService;

  constructor(public viewCtrl: ViewController,private portionsTableService: PortionsTableService) {
  	this.restartPortions = this.portionsTableService.getOptions().restartPortions;
  }

  saveOptions(){
  	this.restartPortions = !this.restartPortions;
    this.portionsTableService.setOptions({restartPortions:this.restartPortions});
  }

}
