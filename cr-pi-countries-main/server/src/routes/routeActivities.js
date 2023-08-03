const {Router} = require('express')
const routerActivities = Router();
const postActivities = require('../controllers/PostActivities')
const getActivities = require('../controllers/GetActivities')

routerActivities.get('/', getActivities)

routerActivities.post('/', postActivities)

module.exports = routerActivities