import { Settings } from 'simulador/config';
import PjManager from '../PjManager';

/**
 * Redux Stuff
 */ import { connect } from 'react-redux';
 	import { changeLayoutState } from 'simulador/src/data/actions/LayoutActions';

class Simulator {
	
	constructor(){
		this.turn = 0;
		this.simulation = null;
		this.turnDuration = Settings.simulation.turn.duration;
		this.players = null;
	}

	getTurno(){
		return this.turn;
	}

	start(callback){

		this.players = new PjManager({name:'yoda'},{name:'vader'});

		this.simulation = setInterval(()=>{

			callback(this.turn);

			this.players.simulateTurn(this.turn,this.turnIncrease.bind(this));

			this.validateBattleState();

		//},this.turnDuration);
		},1000);
	}

	onFinish(){
		console.log('battle finished');
	}

	turnIncrease(){
		this.turn += 1;
	}

	validateBattleState(){
		if( this.turn === 60 ){
			clearInterval(this.simulation);
			this.onFinish();
		}
	}
}

export default Simulator;