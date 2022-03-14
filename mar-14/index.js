var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temperature = document.querySelector('.temperature');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var wind = document.querySelector('.wind');
var min = document.querySelector('.mintemp');
var max = document.querySelector('.maxtemp');
var button= document.querySelector('.submit');
var icn = document.querySelector('.icon');
let convert_json = function(res){
    return res.json();
}

let get_data = function(data){
    var tempValue = data.main.temp;
    var nameValue = data.name;
    var country = data.sys.country;
    var descValue = data.weather[0].description;
    var mintemp = data.main.temp_min;
    var maxtemp = data.main.temp_max;
    var windValue = data.wind.speed;
    var iconcode = data.weather[0].icon;
    main.innerHTML = `${nameValue} ${country}`;
    desc.innerHTML = descValue;
    temperature.innerHTML = `Temperature - ${tempValue} C`;
    min.innerHTML = `Lowest Temp. - ${mintemp} C`;
    max.innerHTML = `highest Temp. - ${maxtemp} C`;
    wind.innerHTML = `Wind Speed - ${windValue} m/s`;
    icn.src = `http://openweathermap.org/img/w/${iconcode}.png`;
    input.value ="";
}

let main_fn =  function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=0741601ce26499b667f802906485ba4e').then(convert_json).then(get_data);
    }
button.addEventListener('click',main_fn);