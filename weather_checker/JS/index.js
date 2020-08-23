let btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener('click', getInfo)

function getInfo(){

    // getting city name
    let cityName = document.getElementById("cityName").value;

    // wheather API
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=c7f16d7e3a4f2179c77dd252cf4d6681`

    fetch(url)
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data)
    

    document.getElementById('addItems').innerHTML=`
        
            
            <li class="list-group-item"> <h2> <span class="badge badge-secondary">City</span> : ${data.name}</h2> </li>
            <li class="list-group-item"> <h2><span class="badge badge-secondary">Temperature</span> : ${data.main.temp}</h2> </li>
            <li class="list-group-item"><h2><span class="badge badge-secondary">Humidity</span> : ${data.main.humidity}</h2> </li>
            <li class="list-group-item"><h2><span class="badge badge-secondary">Weather</span> : ${data.weather[0].main}</h2> </li> `

        });

}
           
            