let express = require('express');
let router = express.Router();
let controller = require('../controllers/events-controller');

router.route('/')
    .get(controller.getAllEvents)
    .post(controller.createEvent);

router.route('/:id')
    .get(controller.getEventById)
    .put(controller.updateEvent)

module.exports = router;