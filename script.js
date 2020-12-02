let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp_icon");
let tempValue = document.getElementById("temp_value");
let climate = document.getElementById("climate");
let IconFile;


window.addEventListener("load",()=>{
    let lon;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=04f1fac7c3cafe821812b22d56f19010`
            fetch(api)
            .then((response)=>{
                return response.json()

            })
            .then((data)=>{
                const {name} = data;
                const {feels_like} = data.main;
                const {id,main} = data.weather[0];
                loc.textContent = name;
                climate.textContent = main;
                tempValue.textContent = Math.round(feels_like-273);
                if(id < 250){
                    tempIcon.src = "./storm.jpeg";
                }
                else if(id < 350){
                    tempIcon.src = "./drizzle.jpeg";
                }
                else if(id<550){
                    tempIcon.src = "./rain.jpeg";
                }
                else if(id<650){
                    tempIcon.src = "./snow.jpeg";
                }
                else if(id<=850){
                    tempIcon.src = "./atmophere.jpeg";
                }
                else if(id > 850){
                    tempIcon.src = "./clouds.jpeg"
                }

                console.log(data)
            })
        })

    }
})