var elem = document.getElementById('starwars');
function promiseFunction (url) {
  fetch(url)
    .then(function (response) {
    	response.json().then(function(data) {
          console.log(data);

        });
  	})
    .catch(function (error) {
    	alert('sorry something went wrong');
  	})
}



async function asyncFunction (url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
     console.log(data);
     starwars.innerHTML =
     '<ul class = "first" align = "center"> statistics:' +
     '<li class = "second" align = "center">' + "name: " + '<span class = "reta">' + data.name + '</span></li>' +
     '<li class = "third" align = "center">' + "rotation period: " + '<span class = "reta1">' +  data.rotation_period + '</span></li>' +
     '<li class = "fourth" align = "center">' + "orbital period: " + '<span class = "reta2">' + data.orbital_period + '</span></li>' +
     '<li class = "fifth" align = "center">' + "diameter: " + '<span class = "reta3">' + data.diameter + '</span></li>' +
     '<li class = "sixth" align = "center">' + "climate: " + '<span class = "reta4">' + data.climate + '</span></li>' +
     '<li class = "seventh" align = "center">' + "gravity: " + '<span class = "reta5">' + data.gravity + '</span></li>' +
     '<li class = "eighth" align = "center">' + "terrain: " + '<span class = "reta6">' + data.terrain + '</span></li>' +
     '<li class = "nineth" align = "center">' + "films: " + '<span class = "reta7">' + data.films + '</span></li>' +
     '<li class = "tenth" align = "center">' + "population: " + '<span class = "reta8">' + data.population + '</span></li>' +
     '<li class = "eleventh" align = "center">' + "surface water: " + '<span class = "reta9">' + data.surface_water + '</span></li>' +
     '</ul>'
  } catch (error) {
    alert('sorry something went wrong');
  }
}

promiseFunction('https://swapi.co/api/planets/2/')
asyncFunction('https://swapi.co/api/planets/2/') // don't work
