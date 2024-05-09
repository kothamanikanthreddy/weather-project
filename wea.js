let temp=document.querySelector(".temp");
let humidity=document.querySelector(".humidity");
let pressure=document.querySelector(".pressure");
let tempmax=document.querySelector(".tempmax");
let tempmin=document.querySelector(".tempmin");
let farm=document.querySelector(".farm input");
let farmbtn=document.querySelector(".farm button");
let apikey="f5917bba06ce0b39121533ae3b27d267";
let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function weatherpredict(city){
    let response=await fetch(apiurl+city+`&appid=${apikey}`);
    let data=await response.json();
    console.log(data);
    temp.innerHTML=Math.round(data.main.temp)+"°C";
    humidity.innerHTML=data.main.humidity+"%";
    pressure.innerHTML=data.main.pressure;
    tempmax.innerHTML=Math.round(data.main.temp_max)+"°C";
    tempmin.innerHTML=Math.round(data.main.temp_min)+"°C";
}
farmbtn.addEventListener("click",()=>{
    weatherpredict(farm.value);
})