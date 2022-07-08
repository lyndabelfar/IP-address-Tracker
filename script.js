const ipAddress = document.querySelector('.ip-address')
const locationPlace = document.querySelector('.location')
const timezone = document.querySelector('.timezone')
const isp = document.querySelector('.isp')

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');



var map = L.map('map').setView([85472, -18], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

searchBtn.addEventListener('click', get)


async function get(){
    let link = "https://geo.ipify.org/api/v2/country?apiKey=at_xtj4Y9RstJkzikxCXLhv77VZf7ytA&ipAddress=" + searchInput.value;

    const response = await fetch(link)
    const data = await response.json();
    console.log(data)
    ipAddress.innerHTML= data.ip;
    locationPlace.innerHTML= data.location.region + "  " +data.location.country;
    timezone.innerHTML= "UTC  " +data.location.timezone;
    isp.innerHTML= data.isp;
    
    map.panTo(new L.LatLng(43.001525,41.023415));

    

}
