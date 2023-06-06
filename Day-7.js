"use strict";

const apiUrl = "https://restcountries.com/v3.1/all";

const promise = fetch(apiUrl, {
  method: "GET",
});

promise
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    //1. Get all the countries from Asia continent /region using Filter function
    console.log(data.filter((country) => country.region === "Asia"));
    //2. Get all the countries with a population of less than 2 lakhs using Filter function
    console.log(data.filter((country) => country.population < 200000));
    //3. Print the following details name, capital, flag using forEach function
    data.forEach(({ name, capital, flag }) => {
      console.log(`Name: ${name} | Capital: ${capital} | Flag: ${flag}`);
    });
    //4. Print the total population of countries using reduce function
    console.log(data.reduce((total, country) => total + country.population, 0));
    // 5. Print the country which uses US Dollars as currency
    //console.log(
    //data.filter((country) =>
    //data.currencies((currency) => currency.code === "USD")
    //)
    //);
  });
