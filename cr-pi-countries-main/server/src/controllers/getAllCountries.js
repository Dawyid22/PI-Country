const { Country } = require('../db')

const getAllCountries = async (req, res) => {

    try {
        const allCountries = await Country.findAll()
        return res.status(200).json(allCountries)
        
    } catch (error) {
        return res.status(404).send(error.message)
    }

}

module.exports = getAllCountries