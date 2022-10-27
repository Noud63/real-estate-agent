const express = require('express')
const Emails = require('../models/emailsModel')

const getAllEmails = async (req, res) => {
    try {
        const allEmails = await Emails.find({});
        res.send(allEmails);
    } catch (error) {
        console.error(error)
    }
}

module.exports = getAllEmails