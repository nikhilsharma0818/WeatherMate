const apikey = "185a8003c932119dcb2c087f6532f27a";
const Weatherdata = document.getElementById('weather-data');
const cityInput = document.getElementById("city-name"); 
const formE1 = document.querySelector("form");

formE1.addEventListener("submit" , function(e){
   e.preventDefault();
   const cityvalue = cityInput.value;
   getweatherdata(cityvalue);
})
//      if(!response.ok){
//         throw new Error("Network Error")
//      }
//      const data = await response.json();
//      console.log(data)
//      const temperature = Math.round(data.main.temp)
//      const description = data.weather[0].description
//      const icon = data.weather[0].icon;
//      const details = [
//         `Feels like: ${Math.round(data.main.feels_like)}`
//         `Humidity: ${data.main.humidity}`
//         `Wind Speed: ${data.wind.speed}`
//      ]
async function getweatherdata (cityvalue){
    try {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${apikey}&units=metric`);
         if(!response.ok){
        throw new Error("Network Error")
     }
     const data = await response.json();
    const temperature = Math.round(data.main.temp)
         const description = data.weather[0].description
         const icon = data.weather[0].icon;
    const details = [
                `Feels like: ${Math.round(data.main.feels_like)}`,
                `Humidity: ${data.main.humidity}%`,
                `Wind Speed: ${data.wind.speed}m/s`,
             ]
      Weatherdata.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
      Weatherdata.querySelector(".temperature").textContent = `${temperature}°C`;
      Weatherdata.querySelector(".description").textContent = description;
       Weatherdata.querySelector(".details").innerHTML = details
        .map((detail) => `<div>${detail}</div>`)
        .join("");
  } catch (error) {
    Weatherdata.querySelector(".icon").innerHTML = "";
    Weatherdata.querySelector(".temperature").textContent = "";
    Weatherdata.querySelector(".description").textContent = "Error happened, try again later.";
     Weatherdata.querySelector(".details").innerHTML = "";
   }
}
