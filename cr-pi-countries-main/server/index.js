const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => { 

  const DB = Country.findAll()
  if(!DB.length){
    const { data } = await axios.get('http://localhost:5000/countries')
    const SearchDB = data.map(country => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : "No se encontro la capital del pais",
        population: country.population,
        maps: country.maps ? country.maps.googleMaps : "No hay mapas",
        languages: country.languages ? country.languages : "No hay idioma encontrado"
      }
    })

   await Country.bulkCreate(SearchDB)    
  }
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
