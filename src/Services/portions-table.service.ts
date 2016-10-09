import { Meal } from '../Components/PortionsTable/Meal';
import { Injectable } from '@angular/core';


@Injectable()
export class PortionsTableService{

	static remainingPortionsStorageKey = "remainingPortionsTableStorage";
	static dietPortionsStorageKey = "dietPortionsTableStorage";

	getRemainingPortions() : Meal[]{

		let remainingPortions : Meal[] = []; 

		if(this.isNewDay())
			return this.getDietPortions();

		let storedRemainingMeals = JSON.parse(localStorage.getItem(PortionsTableService.remainingPortionsStorageKey));  

		if(!storedRemainingMeals)
			return this.getDietPortions();

		storedRemainingMeals.map( x => remainingPortions.push(new Meal(x.name, x.portions)) );
		return remainingPortions;
	}

	setRemainingPortions(meals: Meal[]) : void{
		localStorage.setItem(PortionsTableService.remainingPortionsStorageKey, JSON.stringify(meals));
	}

	getDietPortions() : Meal[]{
		let dietMeals : Meal[] = [];
		let storedDietMeals : Meal[] = JSON.parse(localStorage.getItem(PortionsTableService.dietPortionsStorageKey));  

		if(!storedDietMeals)
			return [new Meal("Desayuno"),new Meal("Comida"),new Meal("Cena"),new Meal("Postentreno"),new Meal("Cualquier hora")];
		
		storedDietMeals.map( x => dietMeals.push(new Meal(x.name, x.portions)) );

		return dietMeals;
	}

	setDietPortions(meals: Meal[]) : void{
		localStorage.setItem(PortionsTableService.dietPortionsStorageKey, JSON.stringify(meals));
	}

	private isNewDay() : boolean{
		let lastDay = localStorage.getItem('lastDay');
		let today = ((new Date()).getDay()).toString();

		if(!lastDay){
			localStorage.setItem('lastDay', today);
		}else{
			if(lastDay!=today){
			  localStorage.setItem('lastDay', today);
			  return true;
			}
		}

		return false;
	}

}