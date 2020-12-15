const express = require('express')
const Company = require('../routes/company');

module.exports = app => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/company', Company)
}