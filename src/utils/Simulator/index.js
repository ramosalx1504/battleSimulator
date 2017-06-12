import { Settings } from 'simulador/config';
import PjManager from '../PjManager';

/**
 * Redux Stuff
 */ import { connect } from 'react-redux';
 	import { changeLayoutState } from 'simulador/src/data/actions/LayoutActions';

/**
 * @description [description]
 * @author Alexis Ramos Mora - ramosalx1504@hotmail.com
 */
class Simulator {
	
	constructor( idPersonaje1, idPersonaje2 , onFinishCallback){
		this.turn = 0;
		this.simulation = null;
		this.turnDuration = Settings.simulation.turn.duration;
		this.players = new PjManager( idPersonaje1, idPersonaje2);
		this.onFinishCallback = onFinishCallback;
		this.onTurnFinishCallback = null;
	}

	getTurno(){
		return this.turn;
	}

	start( callback ){

		this.onTurnFinishCallback = callback;

		this.simulation = setInterval(()=>{

			// callback({
			// 	turno : this.turn,
			// 	pjsState:{
			// 		pj1:{
			// 			'life':Math.random()
			// 		},
			// 		pj2:{
			// 			'life':Math.random()
			// 		}
			// 	},
			// 	atancante: {
			// 		nombre:'Yoda',
			// 		ataque:'Golpe con sable',
			// 	},
			// 	defensor:{
			// 		nombre :'dart',
			// 		defensa: 'falla',
			// 	},
			// 	resultado:{
			// 		battleStatus : 'runing',
			// 	}
			// });

			this.players.simulateTurn(this.turn,this.onSimulateTurn.bind(this));

			this.validateBattleState();

		//},this.turnDuration);
		},1000);
	}

	onSimulateTurn(data){

		this.onTurnFinishCallback({
				turno : this.turn,
				pjsState:{
					pj1:{
						'life':Math.random()
					},
					pj2:{
						'life':Math.random()
					}
				},
				atancante: {
					nombre:'Yoda',
					ataque:'Golpe con sable',
				},
				defensor:{
					nombre :'dart',
					defensa: 'falla',
				},
				resultado:{
					battleStatus : 'runing',
				}
			});

		this.turnIncrease();
	}

	onFinish(){
		this.onFinishCallback();
	}

	turnIncrease(){
		this.turn += 1;
	}

	validateBattleState(){
		if( this.turn === 10 ){
			clearInterval(this.simulation);
			this.onFinish();
		}
	}

	viewPjs(){
		console.log(this.players);
	}
}

export default Simulator;