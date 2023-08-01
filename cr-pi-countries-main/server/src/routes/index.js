const { Router } = require("express");
const getAllCountries = require('../controllers/getAllCountries')

const router = Router();

router.get('/countries', getAllCountries)



module.exports = router;
