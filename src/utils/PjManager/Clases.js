export
class Defensor {
	constructor(){
		this.id = null;
		this.defensas = null;
		this.acierta = false;
		this.defensaUsada = null; 
	}

	setDefensa(data){
		this.defensaUsada = data;
	}

	setAcierto(data){
		this.acierta = data;
		this.defensas = null;
	}
}

export
class Atacante {
	constructor() {
		this.id = null;
		this.tiposDeAtaque  = null;
		this.acierta = false;
		this.ataqueUsado = null;

	}

	setAttack( data ){
		this.ataqueUsado = data; 
	}
}