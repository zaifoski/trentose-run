/* your code should go here */

$(document).ready(function(){

    var model = {
        sortData: function(){
            data.sort(function(a, b){
                return a.time-b.time;
            });
        },
        getData: function(i){
            return data[i];
        }
    };

    var octopus = {
        init: function(){
            octopus.process("all");
            viewForm.listen();
        },
        process: function(category){
            octopus.filterCategory(category);
        },
        filterCategory: function(category){
            model.sortData();
            var j = 0;
            for(var i = 0; i < data.length; i++){
                if(data[i].category==category || category=="all"){
                    j++;
                    viewAtleti.display(model.getData(i),j);
                }
            }
        }

    };
    
    var viewForm = {
        listen: function(){
            $("#btn-filter").click(function(){
                $("#top-selfiers").html("");
                $("#selfiers").html("");
                var category = $(".options>select").val();
                octopus.process(category);    
            });
        }
    };
    
    var viewAtleti = {
        tmplSotto : "<li>"+
"          <div> NAME (CATEGORY) </div> "+
"          <div>   "+
"            <strong>Time</strong>  TIME mins "+
"          </div>"+
"          <div>    "+
"            <strong>Selfies</strong> SELFIES    "+
"          </div> "+
"          <div> "+
"            <strong>#POSITION</strong>  "+
"          </div>    "+
"      </li>",
        tmplSopra : "<li>"+
"          <div class=\"selfie\">"+
"            <img src=\"PIC\">"+          
"          </div>"+
"          <div class=\"stats\">  "+
"            <h2>NAME <small>CATEGORY</small></h2>"+
"            <strong>Time</strong>  TIME mins "+
"            <strong>Selfies</strong> SELFIES    "+
"          </div> "+
"          <div class=\"badge\">"+ 
"            #POSITION"+
"          </div>"+
"        </li>",
        display: function(obj,position){
            if(position<4){
                var newItem = this.tmplSopra.replace("PIC",obj.pic);
                newItem = newItem.replace("CATEGORY",obj.category);
                newItem = newItem.replace("TIME",obj.time);
                newItem = newItem.replace("SELFIES",obj.sefies);
                newItem = newItem.replace("POSITION",position);
                newItem = newItem.replace("NAME",obj.name);
                $("#top-selfiers").append(newItem);
            } else {
                var newItem = this.tmplSotto.replace("NAME",obj.name);
                newItem = newItem.replace("CATEGORY",obj.category);
                newItem = newItem.replace("TIME",obj.time);
                newItem = newItem.replace("SELFIES",obj.sefies);
                newItem = newItem.replace("POSITION",position);
                $("#selfiers").append(newItem);
            }

        }
    };

    octopus.init();    
});






