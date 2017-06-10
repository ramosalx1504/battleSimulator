/**
 * Importamos todos los datos de los personajes
 */ import pjs from '../../data/pjs.json';

class PjManager {

	constructor( pjID1 = 0, pjID2 = 0){

		this.pj1 = pjID1;
		this.pj2 = pjID2;

	}

	simulateTurn( turn, callback){
		console.log("simulando turno",turn,this.pj1.name,this.pj2.name);
		console.log("ataca con y defiende tanto");
		console.log('resutlado calculado con calculator');
		console.log();

		if(callback) callback();
	}

	pjConsoleViewer(pjID){
		console.log(typeof pjs);
	}
}

export default PjManager;