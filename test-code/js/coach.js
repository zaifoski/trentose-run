/* Coach main file */

var Activity = {
  walk : 50,
  bike : 100,
  run : 150
};

var Program = {
  easy : 500,
  normal : 1000,
  crazy : 2000
};

var Coach = {
    _activities : {},
    _program : null,
  
    GENDER_MALE : "male",
    GENDER_FEMALE : "female",
   
    LEVEL_SINGLE : "single",
    LEVEL_MEH    : "meh",
    LEVEL_HAPPY  : "happy",
     
    start : function (program){
        this._program = null;
        if (!Program[program]) return false;
      
        this._program = program;
        this._activities[program] = 0;
        return true;
    },
    
    track : function(activity, distance) {        

      if (!this._program) return null; 
      
      var calories = Activity[activity];
      if (calories) {
        var expenditure = calories * distance;
        this._activities[this._program] += expenditure;
        
        return expenditure;
      }
      return null;
      
    },
  
    checkProgress : function(){
      if (!this._program) return null; 
      return Math.round(this._activities[this._program]  / Program[this._program] * 100);
    }
     
};