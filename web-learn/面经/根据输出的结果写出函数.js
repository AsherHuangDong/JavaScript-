function Hero (name) {
	this.name = name;
	this.time = 0;
	console.log('Hi! This is '+ this.name);
	this.Kill = function(bugs){
		if(bugs == 1){ 
			console.log('Kill ' + bugs + ' bug')
		}else{
			setTimeout(function(){
				console.log('Kill ' + bugs + ' bugs')
			},1000*this.time)
		}
		return this;
	}

	this.recover = function(num){
		console.log('Revover ' + num +' bloods')
		return this;
	}

	this.sleep = function(sleepTime){
		this.time = sleepTime;
		return this;
	}

	return this;
}


Hero('37er');
Hero('37er').Kill(1).recover(30);
Hero('37er').sleep(10).Kill(2);