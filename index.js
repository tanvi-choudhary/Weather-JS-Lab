const search = document.getElementById('search');

const city = document.getElementById('city');
const temp = document.getElementById('temp');
const date = document.getElementById('date');
const weather = document.getElementById('type');
const minmax = document.getElementById('minmax');

const api ={
    key:"02cfa136f4c09b6a3f7217f89d1ca3ab",
    url:"http://api.openweathermap.org/data/2.5/weather?q="
}


search.addEventListener("keyup",(event)=>{

    ////http://api.openweathermap.org/data/2.5/weather?q=Swindon&APPID=02cfa136f4c09b6a3f7217f89d1ca3ab
    fetch(`${api.url}${search.value}&APPID=${api.key}`)
    .then(result => {return result.json();})
    .then(res => {displayResult(res);})

});


function displayResult(res){
   
    city.innerText = `${res.name},${res.sys.country}`;
    //convert kelvin to celsius
    temp.innerText= `${parseInt(res.main.temp-273.15)}°C`;
    weather.innerText = `${res.weather[0].main}`;
    //convert kelvin to celsius
    minmax.innerText = `${parseInt(res.main.temp_max-273.15)} °C / ${parseInt(res.main.temp_min-273.15)} °C`;
    date.innerText = dateCalc();

}

function dateCalc(){
    const months =['January','February','March','April','May','June','July','August','September','October',
                    'November','December']
    const days = ['Sunaday','Monday','Tuesday','Wednusday','Thursday','Friday','Saturday']

    let currDate = new Date();
    let day = currDate.getDay();
    let dates = currDate.getDate();
    let month = currDate.getMonth();
    let year = currDate.getFullYear();

    return `${days[day]} ${dates} ${months[month]} ${year}`
}

