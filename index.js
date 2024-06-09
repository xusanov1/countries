fetch('https://date.nager.at/api/v3/AvailableCountries')
  .then(response => response.json())
  .then(data => {
    const countriesSelect = document.getElementById('countries');
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.countryCode;
      option.text = country.name;
      countriesSelect.add(option);
    });
  })
  .catch(error => console.error('Error fetching available countries:', error));

// Task 2: Country Info
function getCountryInfo() {
  const countryCode = document.getElementById('countryCode').value;
  fetch(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`)
    .then(response => response.json())
    .then(data => {
      const countryInfo = document.getElementById('countryInfo');
      countryInfo.innerHTML = `
        <h3>${data.name}</h3>
        <p>Country Code: ${data.countryCode}</p>
        <p>Currency: ${data.currencyCode} - ${data.currency}</p>
        <p>Continent: ${data.continentName}</p>
        <p>Calling Code: +${data.callingCode}</p>
      `;
    })
    .catch(error => console.error('Error fetching country info:', error));
}

// Task 3: Public Holidays
fetch('https://date.nager.at/api/v3/AvailableCountries')
  .then(response => response.json())
  .then(data => {
    const countrySelect = document.getElementById('countrySelect');
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.countryCode;
      option.text = country.name;
      countrySelect.add(option);
    });
  })
  .catch(error => console.error('Error fetching available countries:', error));

function getPublicHolidays() {
  const year = document.getElementById('year').value;
  const countryCode = document.getElementById('countrySelect').value;
  fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`)
    .then(response => response.json())
    .then(data => {
      const publicHolidays = document.getElementById('publicHolidays');
      publicHolidays.innerHTML = '';
      data.forEach(holiday => {
        const holidayElement = document.createElement('div');
        holidayElement.textContent = `${holiday.date} - ${holiday.name}`;
        publicHolidays.appendChild(holidayElement);
      });
    })
    .catch(error => console.error('Error fetching public holidays:', error));
}