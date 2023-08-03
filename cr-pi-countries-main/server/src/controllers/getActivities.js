const { Activity } = require("../db")

const getActivities = async (req, res) => {
    try {
        const getAllActivities = await Activity.findAll()
        return res.status(200).json(getAllActivities)
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
}

module.exports = getActivities

