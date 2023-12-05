const api_key = "12935843512240dca4b220440230512";


const btn = document.getElementById("search");

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
        console.log(data)
    })
    .catch(err=>{
        console.warn(err)
    })
})



