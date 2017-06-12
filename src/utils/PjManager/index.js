/**
 * Importamos todos los datos de los personajes
 */ import pjs from '../../data/pjs.json';

class PjManager {

	constructor( pjID1, pjID2 ){

		this.pj1 = this.findPjById(pjID1);
		this.pj2 = this.findPjById(pjID2);
		this.pj1TurnStatus = 0;
		this.pj2TurnStatus = 0;
	}

	simulateTurn( turn, callback){

		let data = this.makeNewTurn();

		if(callback) callback(data);
	}

	makeNewTurn(){
		let {atacante,defensor} = this.getTurnRoles();
	}

	getTurnRoles(){

		if( this.pj1TurnStatus === 0 ){

			this.pj1TurnStatus = 1;
			this.pj2TurnStatus = 0;
			return {
				atacante :{
					id:this.pj1.id,
					ataques:[]
				},
				defensor:{
					id:this.pj2.id,
					defensas:[]
				}
			};

		} else if(this.pj2TurnStatus === 0){
			this.pj2TurnStatus = 1;
			this.pj1TurnStatus = 0;
			return {
				atacante :{
					id:this.pj2.id,
					ataques:[]
				},
				defensor:{
					id:this.pj1,
					defensas:[]
				}
			};
		} 
	}

	findPjById(id){
		return pjs.find(( value )=>{
			return value.id == id;
		});
	}
}

export default PjManager;