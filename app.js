let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let usersRoutes = require('./routes/users-routes');
let eventsRoutes = require('./routes/events-routes');

let app = express();

//SWAGGER
//let swag = require('swagger-ui-express');
//let swagDoc = require('./swagger.yaml');

let swag = require('express-swagger-generator')(app);
let options = require('./swagger');
swag(options);
//app.use('/api-docs', swag.serve, swag.setup(swagDoc));

/*app.use((req, resp, next) => {
    console.log("test");
    next();
});*/

const confMongo = require('./configurations/config-mongo');
// mongoose.Promise = global.Promise; V4
mongoose.connect(confMongo.database);

app.use(bodyParser.urlencoded({ extended: false })); //URL
app.use(bodyParser.json()); //BODY

app.use('/api/users', usersRoutes);
app.use('/api/events', eventsRoutes);

app.route('/').get((req, resp) => {
    resp.json('WEB API');
});

app.listen(8888);

module.exports = app;