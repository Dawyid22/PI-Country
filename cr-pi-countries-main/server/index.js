const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: false }).then(() => {
server.listen(PORT, async () => { 

  const DB = await Country.findAll()
  if(!DB.length){
    const { data } = await axios('http://localhost:5000/countries')
    const SearchDB = data.map(country => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : "The capital of the country was not found",
        population: country.population,
        maps: country.maps ? country.maps.googleMaps : "No maps",
        languages: country.languages ? country.languages : "No languages found"
      }
    })

   await Country.bulkCreate(SearchDB)    
  }
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
