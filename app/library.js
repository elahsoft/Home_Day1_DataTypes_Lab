module.exports = {
 dataTypes: function(value){

  if(value !== null){
        if(typeof(value) == typeof([1,2,3]) ){
          if(value === []){
            return undefined;
          }
          else if(value !== null && value.length >= 3){
            return value[2];
          }
          else{
            
            return undefined;
          }            
          }
         else if(typeof(value) == typeof("")){
          return value.length;
        }
        else if( typeof(value) == typeof(undefined)){
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
        else{
          return value(true);
        } 
  }
  else{
    return "no value";
  }
  
          }

        }
