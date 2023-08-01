const { Activity, Country } = require('../db');

const postActivities = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;

    try {
        if (!name) throw Error('invalid data');

        const activity = await Activity.create({ name, difficulty, duration, season });

        const countriesToRelate = await Country.findAll({ where: { id: countries } });

        if (countriesToRelate.length === 0) {
            return res.status(400).json({ error: 'Countries not found' });
        }
        await activity.setCountries(countriesToRelate);
        return res.status(201).json('Activity created successfully');
    } catch (error) {
        console.error('Failed to create activity:', error);
        return res.status(500).json({ error: 'server error' });
    }
};

module.exports = postActivities;