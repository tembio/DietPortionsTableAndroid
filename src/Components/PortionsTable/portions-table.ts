import { Component, Input, OnInit } from '@angular/core';
import { Meal } from './Meal';
import { PortionsTableService } from '../../Services/portions-table.service'; 
import { Events } from 'ionic-angular';


@Component({
  selector: 'portions-table',
  templateUrl: 'portions-table.html',
})
export class PortionsTable implements OnInit{

	@Input() dietTable : boolean;
	meals : Meal[];
	portionLabels: any;
	storageKey : string;
	title : string;

	constructor(private portionsTableService: PortionsTableService, public events: Events){
		events.subscribe('refreshPortions', () => {
	      this.ngOnInit();
		});
	}

	ngOnInit(){
	    this.portionLabels = [
	    					  {foodType:'protein',label:'Proteína'},
	    					  {foodType:'proteinFat',label:'Proteína Grasa'},
	    					  {foodType:'fat',label:'Grasa'},
	    					  {foodType:'carbs',label:'HC'},
	    					  {foodType:'dairy',label:'Lácteo'},
	    					  {foodType:'fruit',label:'Fruta'},
	    					  {foodType:'vegetables',label:'Verdura'}
	    					 ];
		this.meals = this.dietTable? this.portionsTableService.getDietPortions() : this.portionsTableService.getRemainingPortions();
		this.title = this.dietTable? "Dieta":"Diario";
	}

	press(meal,portionType){
		meal.portions[portionType]+=1;
		this.storeData();
	}

	tap(meal,portionType){
		if(meal.portions[portionType]>0){
		    	if(portionType=="vegetables")
		    	  meal.portions[portionType]=0;		
		    	else
			    	meal.portions[portionType]-=1;
				this.storeData();
		}
		this.storeData();
	}

	private storeData(){
		if(this.dietTable)
			this.portionsTableService.setDietPortions(this.meals);
		else
			this.portionsTableService.setRemainingPortions(this.meals);
	}

}

