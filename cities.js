const cities = [
  "Stockholm",
  "Gothenburg",
  "Malmö",
  "Uppsala",
  "Västerås",
  "Örebro",
  "Linköping",
  "Helsingborg",
  "Jönköping",
  "Norrköping",
  // Add more cities as needed
];

const datalist = document.getElementById("city-list");

cities.forEach((city) => {
  const option = document.createElement("option");
  option.value = city;
  datalist.appendChild(option);
});

function findFlight() {
  const fromCity = document.getElementById("from-city").value;
  const toCity = document.getElementById("to-city").value;
  const flightInfo = document.getElementById("flight-info");

  if (fromCity && toCity && fromCity !== toCity) {
    const flightTimes = {
      "Stockholm-Helsingborg": { departure: "14:30", arrival: "15:40" },
      // Add more predefined flight times here
    };

    const route = `${fromCity}-${toCity}`;
    if (flightTimes[route]) {
      flightInfo.textContent = `From ${fromCity} to ${toCity}, the flight flies at ${flightTimes[route].departure} and lands at ${flightTimes[route].arrival}.`;
    } else {
      flightInfo.textContent = `No direct flights available from ${fromCity} to ${toCity}.`;
    }
  } else {
    flightInfo.textContent = "Please select different cities for 'From' and 'To'.";
  }
}