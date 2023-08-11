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
      const lenArray = country.languages ? Object.values(country.languages) : []
      const lenguas = lenArray.join(", ")
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.region,
        capital: country.capital ? country.capital[0] : "The country has no capital",
        population: country.population,
        maps: country.maps ? country.maps.googleMaps : "No maps",
        lenguajes: lenguas
      }
    })

   await Country.bulkCreate(SearchDB)    
  }
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
