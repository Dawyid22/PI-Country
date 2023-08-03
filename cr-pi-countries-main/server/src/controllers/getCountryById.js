const { Country, Activity } = require('../db')

const getCountryById = async (req, res) => {
    const { idPais } = req.params

    try {
        const country = await Country.findOne({ where: { id: idPais }, include: { model: Activity } })
        if (!country) throw Error('No country with the id was found.')
        return res.status(200).json(country)
    } catch (error) {
        return res.status(400).send({ "error": error.message })
    }

}

module.exports = getCountryById


