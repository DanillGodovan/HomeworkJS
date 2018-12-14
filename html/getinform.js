var elem = document.getElementById('starwars');
function promiseFunction (url) {
  fetch(url)
    .then(function (response) {
    	response.json().then(function(data) {
            starwars.innerHTML = data ;
        });
  	})
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
    .catch(function (error) {
    	alert('oops');
  	})
}



async function asyncFunction (url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    starwars.innerHTML = data ;
  } catch (error) {
    alert('oops');
  }
}

promiseFunction('https://swapi.co/api/planets/1/')
asyncFunction('https://swapi.co/api/planets/1/')
