let city = document.querySelector('input');
let button = document.querySelector('button');
let timezone = document.querySelector('.timezone');
let degree = document.querySelector('.degree');
let degreeMax = document.querySelector('.max');
let degreeMin = document.querySelector('.min');
let degreeSection = document.querySelector('.degree-section');
let descriptionWeather = document.querySelector('.description');
let iconWeather = document.querySelector('.icon');
let measure = document.querySelector('span');

button.addEventListener('click', (e) => {
    e.preventDefault();


    const api = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=72fe768d404c5e2c3777a7ca2754ca13`;
    city.value = '';

    fetch(api)
        .then(response => response.json())
        .then(data => {
            const { temp, temp_max, temp_min, humidity } = data.main;
            const { description, icon } = data.weather[0];
            const nameLocation = data.name;
            degree.textContent = temp;
            degreeMax.textContent = temp_max;
            degreeMin.textContent = temp_min;
            timezone.textContent = nameLocation;
            descriptionWeather.textContent = description;
            console.log(data);

            iconWeather.src = `http://openweathermap.org/img/wn/${icon}@4x.png`;

            degreeSection.addEventListener('click', () => {

                let c = temp - 273.15;
                let k = temp;

                if (measure.textContent === 'K') {
                    measure.textContent = 'C';
                    degree.textContent = Math.floor(c);
                    degreeMax.textContent = Math.floor(temp_max - 273.15);
                    degreeMin.textContent = Math.floor(temp_min - 273 - 15);
                } else {
                    measure.textContent = 'K';
                    degree.textContent = k;
                    degreeMax.textContent = Math.floor(temp_max);
                    degreeMin.textContent = Math.floor(temp_min);
                };

            });
        })

});