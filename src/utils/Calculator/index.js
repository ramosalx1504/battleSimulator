
class Calculator {

	constructor() {
		Array.prototype.randomElement = function () {
    		return this[Math.floor(Math.random() * this.length)];
		}
	}

	acierto({ acertar, fallar }){

		let rn = this.getRandom();
		return ( rn <= acertar ) ? true : false; 
	}

	defensa( array ){

		let rn = this.getRandom();

		let result = {};
			result['acierta'] = false;
			result['defensaUsada'] = null;

			if ( rn <= array[0].probabilidad ) {
				result.acierta = false;
			} else if ( rn <= array[1].probabilidad ) {
				result.acierta = true; 
				result.defensaUsada = array[1]
			}else {
				result.acierta = true; 
				result.defensaUsada = array[2]
			}

		return result;
	}

	randomAttack( boolean, array ){

		if(!boolean) return null;

		let rn = this.getRandom();

		return  ( rn <= array[0].probabilidad ) ? array[0] :
				( rn <= array[1].probabilidad ) ? array[1] :
				( array[2] );
	}

	critico( object ){

	}
	
	getRandom(){
		return Math.random();
	}

	getTurnResult({ atacante, defensor }){

		atacante.setAttack(this.randomAttack(atacante.acierta,atacante.tiposDeAtaque));
		defensor.setDefensa(defensor.defensas.defensaUsada);
		defensor.setAcierto(defensor.defensas.acierta);

		return {
			atacante,
			defensor
		};
	}

	restar( valor, resistencia){
		
		if(valor <= resistencia ){
			return 0;
		}else {
			return valor - resistencia;
		}
	}

	restarDeVida(valor,vida){
		valor = valor / 100;
		if( valor > vida ){
			return 0;
		}else {
			return vida - valor;
		}
	}
}

export default new Calculator();