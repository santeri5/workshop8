var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//Function loadNames. It will print only firstname and lastname.
function loadNames() {
    const obj = JSON.parse(text);
    txt = "";
    //For loop check every lines, and save firstName and lastName to the "txt"
    for (let i in obj.employees) {
        txt += obj.employees[i].firstName + " " + obj.employees[i].lastName + "<br>";
    }
    //Replacing div "jsondata" with all firstnames and lastnames
    document.getElementById("jsondata").innerHTML = txt;
}
//Function loadAllData. It will print all data which can found from var text.
function loadAllData() {
    const obj = JSON.parse(text);
    //Replacing div "jsondata" with all data which can found from var text.
    document.getElementById("jsondata").innerHTML = text;
}

//Exerice 3.

//Function for "get data" button, and it will return city "Vantaa" weather information to div.
function getWeather() {
    var x = "Vantaa";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=vantaa&appid=79e8325f4536e63345e3a9a069927f7d&units=metric" 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            obj = JSON.parse(xmlhttp.responseText);
            iconId = obj.weather[0].icon;
            document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/"+iconId+"@2x.png"; //Displays weather icon.
            document.getElementById("weatherdata").innerHTML = "City: " + x + "<br>" + "Temp :" + obj["main"]["temp"] + "C<br>" + "Clouds: " + obj.weather[0].description + "<br>" + "Humidity: " + obj["main"]["humidity"] + "%"; //Displays weather data.
        } else {
            //If city name cannot found, error message is displayed.
            document.getElementById("weatherdata").innerHTML = "Incorrect input!"
        }
    }
}

// Function for pulldown menu.
function getData() {
    var x = document.getElementById("city").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=79e8325f4536e63345e3a9a069927f7d&units=metric" 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            obj = JSON.parse(xmlhttp.responseText);
            iconId = obj.weather[0].icon;
            document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/"+iconId+"@2x.png"; //Displays weather icon.
            document.getElementById("weatherdata").innerHTML = "City: " + x + "<br>" + "Temp :" + obj["main"]["temp"] + "C<br>" + "Clouds: " + obj.weather[0].description + "<br>" + "Humidity: " + obj["main"]["humidity"] + "%"; //Displays weather data.
        }
    }
}

//Function for manual city input.
function getWeatherManualSearch() {
    var x = document.getElementById("citysearch").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+x+"&appid=79e8325f4536e63345e3a9a069927f7d&units=metric" 
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            obj = JSON.parse(xmlhttp.responseText);
            iconId = obj.weather[0].icon;
            document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/"+iconId+"@2x.png"; //Displays weather icon.
            document.getElementById("weatherdata").innerHTML = "City: " + x + "<br>" + "Temp :" + obj["main"]["temp"] + "C<br>" + "Clouds: " + obj.weather[0].description + "<br>" + "Humidity: " + obj["main"]["humidity"] + "%"; //Displays weather data.
        } else {
            //If city name cannot found, error message is displayed.
            document.getElementById("weatherdata").innerHTML = "Incorrect input!"
        }
    }
}