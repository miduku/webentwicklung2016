var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "data.json");
oReq.send();

function reqListener () {
  var DATA = JSON.parse(this.responseText);
  console.log(DATA);

  function reqListener () {
    var DATA = JSON.parse(this.responseText);
    console.log(DATA);

    // average age per century =
    function century(person) {
      return Math.ceil(person.died / 100);
    }


    var alleJahrzehnte = [...new Set(DATA.map(century))]; // map() magic mit for schleifen und so weiter




    for (p of DATA) {
      console.log(century(p));
    }
  }
}
