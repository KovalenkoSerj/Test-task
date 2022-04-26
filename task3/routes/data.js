const express = require('express');

const router = express.Router();
const {
    getData,
    searchData
} = require('../controllers/data');

router.get('/data', getData);
router.post('/search', searchData)



module.exports = router;