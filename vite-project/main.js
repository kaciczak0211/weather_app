const api_key = "12935843512240dca4b220440230512";


const btn = document.getElementById("search");

const temp = document.getElementById("temp")

const form = document.getElementById("city")
const cityName = document.getElementById("city_name")

const info = document.getElementById("info");





btn.addEventListener("click", function(){
    const city = document.getElementById("city").value
    console.log(city)
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}`)
    .then(res=>{
        if(!res.ok){
            throw new Error("wrong value")
        }
    
        return res.json()
    })
    .then(data=>{
        info.style.display = "block"
        cityName.innerHTML = `${data.location.name}, ${data.location.country}`;
        console.log(data)
        const temperature = data.current.temp_c
        temp.innerHTML = temperature + "°C"
        console.log(temperature)
    })
    .catch(err=>{
        console.warn(err)
    })

    form.value = "";
})



