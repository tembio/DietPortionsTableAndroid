
export interface Portion{
	protein : number,
	proteinFat : number,
	fat : number,
	carbs : number,
	dairy : number,
	fruit : number,
	vegetables : number
}

type PortionType = 'protein' | 'proteinFat' | 'fat' | 'carbs' | 'dairy' | 'fruit' | 'vegetables';

export class Meal{

	name : string;
	portions : Portion; 

	constructor(name : string,portions? : Portion){
		this.name = name;
		this.portions = portions || 
		  {
			protein : 0,
			proteinFat : 0,
			fat : 0,
			carbs : 0,
			dairy : 0,
			fruit : 0,
			vegetables : 0
		  };
	}
}
