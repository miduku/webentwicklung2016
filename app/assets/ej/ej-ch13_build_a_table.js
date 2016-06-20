/**
 * Chapter 13
 * Build A Table
 *
 * <table>
 *  <tr>
 *    <th>name</th>
 *    <th>height</th>
 *    <th>country</th>
 *  </tr>
 *  <tr>
 *    <td>Kilimanjaro</td>
 *    <td>5895</td>
 *    <td>Tanzania</td>
 *  </tr>
 * </table>
 */

// add event listener so that document.body isn't null
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
  ];



  function buildTable(array) {
    var table  = document.createElement('table');

    var names     = [],
        heights   = [],
        countries = [];

    var rowsAmount   = array.length;
    var thArray      = Object.keys(array[0]);
    var columnAmount = thArray.length;


    // create <tr> for <th>
    var tr = document.createElement('tr');
    var tableTr0 = table.appendChild(tr);

      for (var t = 0; t < columnAmount; t++) {
        var th = document.createElement('th');
        var tableTrTh = tableTr0.appendChild(th);
            tableTrTh.textContent = thArray[t];
      }

    // create normal <tr>
    for (var i = 0; i < rowsAmount; i++) {
      var tr = document.createElement('tr');
      var tableTr = table.appendChild(tr);

      // create <td>
      for (var j = 0; j < columnAmount; j++) {
        var td = document.createElement('td');
        var tableTrTd = tableTr.appendChild(td);
            tableTrTd.textContent = MOUNTAINS[i][thArray[j]];
      }

    }

    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
});
