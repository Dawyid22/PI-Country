const {Router} = require('express')
const routerCountries = Router();
const getAllCountries = require('../controllers/getAllCountries')
const getCoutriesById = require('../controllers/getCountryById')
const getCountriesByName = require('../controllers/getCountryByName')

routerCountries.get('/', getAllCountries)

routerCountries.get('/name', getCountriesByName)

routerCountries.get('/:idPais', getCoutriesById)

module.exports = routerCountries