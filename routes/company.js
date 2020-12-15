const router = require('express').Router();
const Company = require('../models/company')

// Get all saved companies
router.get('/', async (req, res) => {
    let allCompanies = await Company.find();
    res.status(200).send({
        status: true,
        message: 'Fetched All Companies!',
        data: allCompanies
    })
})

// Save new Company
router.post('/', async (req, res) => {
    const {name, cid} = req.body;
    let company = await Company.findOne({name})
    if(company) return res.status(400).send({
        status: false,
        message: 'Company Saved Already!'
    })
    company = new Company({name, cid})
    await company.save();
    res.status(200).send({
        status: true,
        message: 'Company Saved!'
    })
})


module.exports = router;