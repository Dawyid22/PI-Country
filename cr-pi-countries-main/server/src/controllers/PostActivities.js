const { Activity, Country } = require('../db');

const postActivities = async (req, res) => {
    const { name, difficulty, season, idPais } = req.body
    try {
        if (!name || !difficulty || !season || !idPais) throw Error("Mandatory data missing")
        const respuesta = await Activity.create({ name, difficulty, season })
        await respuesta.setCountries(idPais);
        const actividadCreada = await Activity.findOne({ where: { id: respuesta.id }, include: { model: Country } })
        return res.status(200).send({ "message": "Actividad creada correctamente", actividadCreada })
    } catch (error) {
        return res.status(404).send({ "error": error.message })
    }
};

module.exports = postActivities;