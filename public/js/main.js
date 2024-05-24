const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityname.value;
    if (cityval === "") {
        city_name.innerText = `Please write the city name before you search`;
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=82cf18c9bd059f12fd32f2befdf7232a`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            city_name.innerText = data.name;
            temp.innerText = `${(data.main.temp - 273.15).toFixed(1)}°C`;
            
            const status = data.weather[0].main;
            if (status === "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' aria-hidden='true'></i>";
                temp_status.firstChild.style.color = '#eccc68';
            } else if (status === "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' aria-hidden='true'></i>";
                temp_status.firstChild.style.color = '#f1f2f6';
            } else if (status === "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-showers-heavy' aria-hidden='true'></i>";
                temp_status.firstChild.style.color = '#a4b0be';
            } else if (status === "Snow") {
                temp_status.innerHTML = "<i class='fas fa-snowflake' aria-hidden='true'></i>";
                temp_status.firstChild.style.color = '#00a8ff';
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' aria-hidden='true'></i>";
                temp_status.firstChild.style.color = '#edf094';
            }
            
            // Remove data_hide class to show the data
            document.querySelector('.middle_layer').classList.remove('data_hide');
            
        } catch (error) {
            city_name.innerText = `Please select the city name properly`;
        }
    }
};

submitBtn.addEventListener('click', getinfo);
