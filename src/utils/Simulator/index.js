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
	}

	getTurno(){
		return this.turn;
	}

	start( callback ){

		this.simulation = setInterval(()=>{

			callback({
				turno : this.turn,
				pjsState:{
					pj1:{
						'vida':0.2
					},
					pj2:{
						'vida':0.2
					}
				},
				atancante: {
					nombre:'yoda',
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

			this.players.simulateTurn(this.turn,this.turnIncrease.bind(this));

			this.validateBattleState();

		//},this.turnDuration);
		},1000);
	}

	onFinish(){
		this.onFinishCallback();
	}

	turnIncrease(){
		this.turn += 1;
	}

	validateBattleState(){
		if( this.turn === 3 ){
			clearInterval(this.simulation);
			this.onFinish();
		}
	}

	viewPjs(){
		console.log(this.players);
	}
}

export default Simulator;