const { Router } = require("express");
const getAllCountries = require('../controllers/getAllCountries')


const router = Router();

router.get('/', getAllCountries)



module.exports = router;
