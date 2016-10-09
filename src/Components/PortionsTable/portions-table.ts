import { Component, Input, OnInit } from '@angular/core';
import { Meal } from './Meal';
import { PortionsTableService } from '../../Services/portions-table.service'; 


@Component({
  selector: 'portions-table',
  templateUrl: 'portions-table.html',
})
export class PortionsTable implements OnInit{

	@Input() dietTable;
	meals : Meal[];
	portionLabels : string[];
	storageKey : string;

	static HOLD_TIME : number = 500;
	private startMouseDown : number;
	private timer;

	constructor(private portionsTableService: PortionsTableService){}

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
	}

	mouseDown(meal,portionType){
		this.startMouseDown = (new Date()).getTime(); 	
		this.timer = setTimeout(()=>{
		    			meal.portions[portionType]+=1;
						this.storeData();
	    		}, PortionsTable.HOLD_TIME);
	}	

	mouseUp(meal,portionType){
        if(<number>(new Date().getTime()) - this.startMouseDown < PortionsTable.HOLD_TIME){
		    clearTimeout(this.timer);
			if(meal.portions[portionType]>0){
		    	if(portionType=="vegetables")
		    	  meal.portions[portionType]=0;		
		    	else
			    	meal.portions[portionType]-=1;
				this.storeData();
			}
        }
	}	

	private storeData(){
		if(this.dietTable)
			this.portionsTableService.setDietPortions(this.meals);
		else
			this.portionsTableService.setRemainingPortions(this.meals);
	}

}

