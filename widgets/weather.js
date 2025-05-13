const apiKey = '96a678a07e7759cc71ae1ea0b3176236';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");
const City= document.querySelector(".city");
const Temp=document.querySelector(".temp");
const Humidity=document.querySelector(".humidity");
const Wind=document.querySelector(".wind");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if( response.status== 404){
    weatherIcon.style.visibility="hidden";
    City.innerHTML="Invalid city name";
    Temp.innerHTML="--";
    Humidity.innerHTML="--";
    Wind.innerHTML="--";


    } else {
        weatherIcon.style.visibility="visible";
        var data= await response.json();
        console.log(data);
        City.innerHTML=data.name;
        Temp.innerHTML=Math.round(data.main.temp) + "°C";
        Humidity.innerHTML=data.main.humidity +"%";
        Wind.innerHTML=data.wind.speed +" km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        
            else if (data.weather[0].main == "Clear"){
                weatherIcon.src="images/clear.png";
            }
            else if (data.weather[0].main == "Dizzle"){
                weatherIcon.src="images/dizzle.png";
            }
            else if (data.weather[0].main == "Mist"){
                weatherIcon.src="images/mist.png";
            }
            else if (data.weather[0].main == "Rain"){
                weatherIcon.src="images/rain.png";
            }
            else if (data.weather[0].main == "Snow"){
                weatherIcon.src="images/snow.png";
            }
    
    }
    
}
searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);

})
  
