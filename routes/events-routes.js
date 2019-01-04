let express = require('express');
let router = express.Router();
let controller = require('../controllers/events-controller');

/**
 * @typedef Event
 * @property {string} name.required
 * @property {date} startDate.required
 * @property {date} endDate.required
 * @property {string} street
 * @property {string} zipcode
 * @property {string} city.required
 */

/**
 * @route GET /api/event/search
 * @group events - Operations about events
 * @param {string} name.query - name of event
 * @param {string} city.query - city of event
 * @param {date} startDate.query - start date of event
 * @returns {Array.<Event>} 200 - An array of events
 * @returns {Error} - Unexpected error
 */
router.route('/search')
    .get(controller.searchEvent)


router.route('/')
    .get(controller.getAllEvents)
    .post(controller.createEvent);

router.route('/:id')
    .get(controller.getEventById);



module.exports = router;