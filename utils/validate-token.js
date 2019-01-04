let jwt = require('jsonwebtoken');
let conf = require('../configurations/config-mongo');

module.exports = (req, resp, next) => {

    if (req.headers['authorization']) {
        let token = req.headers['authorization'].split(" ")[1] || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, conf.key, (err, decoded) => {
                if (err) {
                    resp.status(403).json({ status: "error", message: err.message });
                } else {
                    console.log(`mail: ${decoded.login}`);
                    next();
                }
            });
        } else
            resp.status(403).json({ status: "error", message: "token required" });
    } else
        resp.status(403).json({ status: "error", message: "token required" });
}
