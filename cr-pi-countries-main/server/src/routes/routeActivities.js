const { Router } = require('express')
const routerActivities = Router();
const postActivities = require('../controllers/PostActivities')
const getActivities = require('../controllers/GetActivities')
const deleteActivity = require('../controllers/deleteActivity')

routerActivities
    .get('/', getActivities)
    .post('/', postActivities)
    .delete('/:id', deleteActivity)
    
module.exports = routerActivities