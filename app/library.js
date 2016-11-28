module.exports = {
 dataTypes: function(value){
 	if(typeof(value) == typeof("")){
    return value.length;
  }
  else if((typeof(value) == typeof(null)) || typeof(value) == typeof(undefined) ) {
  	return "no value";
  }
  else if(typeof(value) == typeof(true)){
  	return value;
  }
  else if(typeof(value) == typeof(4)){
  	if(value < 100){
  		return "less than 100";
  	}
  	else if(value > 100){
  		return "more than 100";
  	}
  	else{
  		return "equal to 100";
  	}
  	}
  					
  	}				
  									
  	}
  

