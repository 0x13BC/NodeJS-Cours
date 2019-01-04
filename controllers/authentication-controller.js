let express = require('express');
let users = require('../models/users');
let sha1 = require('../utils/sha1');
let jwt = require('jsonwebtoken');
let conf = require('../configurations/config-mongo');

module.exports = (req, resp) => {
    const login = req.body.login;
    const password = sha1(req.body.password);

    users.findOne({ mail: login, password: password }, (err, data) => {
        if (data) {
            jwt.sign({ id: data._id, login: data.mail }, conf.key, { expiresIn: 1440 });
        } else {
            resp.status(400).json({ success: false, message: 'login/password incorrect.' });
        }
    });


}