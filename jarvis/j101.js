//-------------------------------- ACTION FUNCTION'S ---------------------------------------------------------
/*function getWeatherInfo(){

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?id=1252948",
        dataType: "text",
        success: function(data) {
                
            var obj = JSON.parse(data);
            var d = new Date();
            var current_hours = d.getHours();    
            
            weather_speak(obj);
            
           
        }
    });
}*/

var wish_morning = function(){
    
    var d = new Date();
    var current_hours = d.getHours();
    if( current_hours < 12){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?id=1252948",
            dataType: "text",
            success: function(data) {
                
                var obj = JSON.parse(data);   
            
                weather_wish(obj,"morning");

            }
        });
    }
    else if(current_hours < 16){
        speak_it("Its Afternoon Sir");
    }
    else{
        speak_it("Its Evening Sir");
    }
}

var wish_afternoon = function(){

    var d = new Date();
    var current_hours = d.getHours();
    if( current_hours > 12 && current_hours < 16){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?id=1252948",
            dataType: "text",
            success: function(data) {
                
                var obj = JSON.parse(data);   
            
                weather_wish(obj,"afternoon");
            }
        });
    }
    else if(current_hours < 12){
        speak_it("Its Morning Sir");
    }
    else{
        speak_it("Its Evening Sir");
    }

}

var wish_evening = function(){

    var d = new Date();
    var current_hours = d.getHours();
    if( current_hours > 16){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?id=1252948",
            dataType: "text",
            success: function(data) {
                
                var obj = JSON.parse(data);   
            
                weather_wish(obj,"Evening");

            }
        });

    }
    else if(current_hours > 12 && current_hours < 16){
        speak_it("Its Afternoon Sir");
    }
    else{
        speak_it("Its Morning Sir");
    }
   
}

var tomorrow_timetable = function(){
    var d = new Date();
    var tomorrow = ( d.getDay() + 1 ) % 7;
    var text = time_table(tomorrow);
    speak_it(text);
}

//--------------------------------------------------------------------------------------------------------------

// -------------------------------------------SPEAK IT FUNCTION-------------------------------------------------
function speak_it(text){
    responsiveVoice.speak(text,"UK English Male");
}

//-------------------------------------------------------------------------------------------------------------


function weather_wish(obj, state_of_day){
    var d = new Date();
    var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var n = weekday[d.getDay()];
    var time_now;
    if(d.getHours() > 12)
        time_now = ( d.getHours() - 12 ).toString();
    else
        time_now  = d.getHours().toString();
            
            // ------------------------------TEXT TO SPEAK--------------------------------------------------------------        	
            var speak_text = "ooo Good"+ state_of_day +"Sir. This is "+ n + state_of_day +". Time now is "+ time_now +" "+ d.getMinutes().toString() +",  Weather outside is "+obj.weather[0].description+".  ";
            speak_text += "Temperature is, "+ ((obj.main.temp-273.15).toPrecision(2)).toString() + "degree celsius.  ";
        	speak_text +="Wind speed is " + obj.wind.speed.toString()+ "miles per seconds.  ";
        	speak_text += "Humidity is " + obj.main.humidity +" percent.  ";

            //-------------------------------------------------------------------------------------------------------------

    speak_it(speak_text);
    speak_it(speak_text);
    
    

}

function time_table(day){
    if(day == 0){
        return "tomorrow is Sunday sir, you don't have classes";
    }
    else if(day == 1){
        return "Your Class Will Starts at 8, and you have Theory of Computation,  DataWarehouse and DataMining, Software Engineering in first half and C.T Lab in second half";
    }
    else if(day == 2){
        return "Your Class Will Starts at 9, and you have DataWarehouse and DataMining, Accountancy,Theory of Computation in first half and Operating System, Software Engineering  in second half";
    }
    else if(day == 3){
        return "Your Class Will Starts at 8, and you have Theory of Computation,  DataWarehouse and DataMining, Operating System, Software Engineering in first half and O.S Lab in second half";
    }
    else if(day == 4){
        return "Your Class Will Starts at 8, and you have Operating System,  DataWarehouse and DataMining, Accountancy, Theory of Computation in first half and you are free in second half";        
    }
    else if(day == 5){
        return "Your Class Will Starts at 9, and you have Software Engineering, K.E lab in first half and Operating System, Software Engineering in second half";
    }
    else{
        return "tomorrow is Saturday sir, you don't have classes";
    }
 }
