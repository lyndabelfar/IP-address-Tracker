const ipAddress = document.querySelector('.ip-address')
const locationPlace = document.querySelector('.location')
const timezone = document.querySelector('.timezone')
const isp = document.querySelector('.isp')

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');



searchBtn.addEventListener('click', get)


async function get(){
    let link = "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_xtj4Y9RstJkzikxCXLhv77VZf7ytA&ipAddress="+ searchInput.value;

    const response = await fetch(link)
    const data = await response.json();
    console.log(data)
    ipAddress.innerHTML= data.ip;
    locationPlace.innerHTML= data.location.region + "  " +data.location.country;
    timezone.innerHTML= "UTC  " +data.location.timezone;
    isp.innerHTML= data.isp;

    let mapData = {
        lat: data.location.lat,
        lng: data.location.lng 

    }

    
    var map = L.map('map').setView([mapData.lat, mapData.lng], 13);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);
    var marker = L.marker([mapData.lat, mapData.lng]).addTo(map);

    marker.bindPopup(`<b>${data.location.country + " " +data.location.region} </b><br>That's what you have been searching for.`).openPopup();


    

    

}
