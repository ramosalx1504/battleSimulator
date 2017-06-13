/**
 * Importamos todos los datos de los personajes
 */ import pjs from '../../data/pjs.json';
 	import Calculator from '../Calculator';
 	import { Atacante, Defensor } from './Clases';

/**
 * Clase encargada de brindar todos los datos de un turno y personajes a la simulacion.
 */
class PjManager {

	constructor( pjID1, pjID2 ){

		this.currentDefensorId = null;

		this.pj1 = this.findPjById(pjID1);
		this.pj2 = this.findPjById(pjID2);
		
		this.pj1TurnStatus = 0;
		this.pj2TurnStatus = 0;

		this.pj1Status = this.initialPjStatus();
		this.pj2Status = this.initialPjStatus();
	}

	simulateTurn( turn, callback){

		let data = this.makeNewTurn();

		if(callback) callback(data);
	}

	makeNewTurn(){

		let data = Calculator.getTurnResult(this.getTurnRoles());

		let { atacante, defensor } = this.updatePjStatus(data);
		console.log(this.pj1Status,this.pj2Status);
		return {
			atacante,
			defensor,
			pj1State : this.pj1Status,
			pj2State : this.pj2Status
		};
	}

	updatePjStatus({ atacante, defensor }){

		atacante['daño'] = this.extractAttackNumber(atacante);
		defensor['resiste'] = this.extractDefenceNumber(defensor);

		this.updateLifeStatus( atacante.daño, defensor.resiste );

		return {
			atacante,
			defensor
		};
	}

	extractAttackNumber( atacante ){
		if(!atacante.acierta) return 0;
		else return atacante.ataqueUsado.daño;
	}

	extractDefenceNumber( defensor ){
		if(!defensor.acierta) return 0;
		else return defensor.defensaUsada.resistencia;
	}

	updateLifeStatus(descuento,resistencia){
		
		let result = Calculator.restar(descuento,resistencia);

		this.currentDefensor.life = Calculator.restarDeVida(result,this.currentDefensor.life);
	}

	getTurnRoles(){

		let atacante = new Atacante();
		let defensor = new Defensor();

		if( this.pj1TurnStatus === 0 ) {
			this.pj1TurnStatus = 1;
			this.pj2TurnStatus = 0;

			atacante.id = this.pj1.id;
			atacante.acierta = Calculator.acierto(this.pj1.ataque);
			atacante.tiposDeAtaque = this.pj1.tiposDeAtaque;

			defensor.id = this.pj2.id;
			defensor.defensas = Calculator.defensa(this.pj2.defensa);

			this.currentDefensor = this.pj2Status;

		} else if( this.pj2TurnStatus === 0 ){
				   this.pj2TurnStatus = 1;
				   this.pj1TurnStatus = 0;

			atacante.id = this.pj2.id;
			atacante.acierta = Calculator.acierto(this.pj2.ataque);
			atacante.tiposDeAtaque = this.pj2.tiposDeAtaque;

			defensor.id = this.pj1.id;
			defensor.defensas = Calculator.defensa(this.pj1.defensa);

			this.currentDefensor = this.pj1Status;
		} 

		return {
			atacante,
			defensor
		};
	}

	findPjById(id){
		return pjs.find(( value )=>{
			return value.id == id;
		});
	}

	initialPjStatus(){

		// 1 equivale a la barra en 100%
		return {
			life : 1,
			turnRole : null
		}
	}
}

export default PjManager;