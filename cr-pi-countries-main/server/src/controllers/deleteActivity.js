const { Activity } = require('../db')

const deleteActivity  = async (req, res) => {
    const { id } = req.params
    try {
        await Activity.destroy({where:{id: id}})
        return res.status(200).send({"message": "Activity delete"})
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = deleteActivity