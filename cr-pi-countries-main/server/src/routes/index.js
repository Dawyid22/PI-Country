const { Router } = require("express");
const router = Router();
const routerActivities = require('../routes/routeActivities')
const routerCountries = require('../routes/routeCountries')

router.use('/countries', routerCountries);
router.use('/activities', routerActivities);

module.exports = router;
