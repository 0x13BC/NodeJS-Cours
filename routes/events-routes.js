let express = require('express');
let router = express.Router();
let controller = require('../controllers/events-controller');

router.route('/search')
    .get(controller.searchEvent)
    .post(controller.searchEvent);

router.route('/')
    .get(controller.getAllEvents)
    .post(controller.createEvent);

router.route('/:id')
    .get(controller.getEventById);



module.exports = router;