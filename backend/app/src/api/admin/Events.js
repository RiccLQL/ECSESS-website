/**
 * @description all routes for this specific page. Will be exported to the master router.
 * @author
 */

//IMPORTS
const express = require("express");
const { getCategories, postEvent, getCategoryByName, postCategory, getEvents, deleteEvent, deleteEventCategory, getEventsByCategory } = require("../../controller/admin/Events");
const router = express.Router();

//ROUTE DEFINITIONS
/* Get event categories */
router.get("/categories", getCategories);
/* Post event */
router.post("/", postEvent)
/* Get event category by name */
router.get("/category/:name", getCategoryByName);
/* Post event category */
router.post("/category", postCategory);
/* Get events */
router.get("/", getEvents);
/* Delete event */
router.delete("/:id", deleteEvent);
/* Delete event category */
router.delete("/category/:id", deleteEventCategory);
/* Get event by category id*/
router.get("/byCategory/:id", getEventsByCategory);

module.exports = router;