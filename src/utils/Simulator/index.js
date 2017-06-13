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
		this.players = new PjManager( idPersonaje1, idPersonaje2 );
		this.onFinishCallback = onFinishCallback;
		this.onTurnFinishCallback = null;
		this.maxNumberOfTurns = Settings.turnMaximum;
	}

	getTurno(){
		return this.turn;
	}

	start( callback ){

		this.onTurnFinishCallback = callback;

		this.simulation = setInterval(()=>{

			this.players.simulateTurn(this.turn,this.onSimulateTurn.bind(this));

		},this.turnDuration);
	}

	onSimulateTurn({atacante,defensor,pj1State,pj2State}){
		this.onTurnFinishCallback({
				turno : this.turn,
				pjsState:{
					pj1:{
						'life': pj1State.life
					},
					pj2:{
						'life': pj2State.life
					}
				},
				atacante,
				defensor,
				resultado:{
					battleStatus : 'runing',
				}
			});

		this.turnIncrease();

		this.validateBattleState(pj1State.life,pj2State.life);
	}

	onFinish(){
		this.onFinishCallback();
	}

	turnIncrease(){
		this.turn += 1;
	}

	validateBattleState(){
		if( this.turn === this.maxNumberOfTurns || this.validateEndOfBattle( arguments ) ){
			clearInterval(this.simulation);
			this.onFinish();
		}
	}

	validateEndOfBattle( life ){
		return ( life[0] === 0 || life[1] === 0 ) ? true : false;
	}

	viewPjs(){
		console.log(this.players);
	}
}

export default Simulator;