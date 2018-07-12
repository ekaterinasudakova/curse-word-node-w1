//ajax GET request to localhost:1337
//put whatever it says in the h1

var h1 = document.querySelector('.content h1');

axios.get('http://localhost:1337')
  .then(function (response) {
    console.log(response.data);
    h1.innerHTML = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
