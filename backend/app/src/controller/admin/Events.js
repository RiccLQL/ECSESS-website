const { getCategoriesService, postEventService, getCategoryByNameService, postCategoryService, getEventsService, deleteEventService, deleteEventCategoryService, getEventsByCategoryService } = require("../../service/admin/Events");


const getCategories = async (req, res, next) => {
    try {
        const categories = await getCategoriesService(req.params.id);
        if (categories) {
            return res.status(200).json({
                success: true,
                message: "fetched event category successfully",
                categories: categories
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there are no event categories"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const postEvent = async (req, res, next) => {
    try {
        const event = await postEventService(req.body);
        if (event) {
            return res.status(200).json({
                success: true,
                message: "posted event successfully",
                events: event
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "cannot post such event"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const getCategoryByName = async (req, res, next) => {
    try {
        const categories = await getCategoryByNameService(req.params.name);
        if (categories) {
            return res.status(200).json({
                success: true,
                message: "fetched category successfully",
                categories: categories
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there is no such category"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const postCategory = async (req, res, next) => {
    try {
        const category = await postCategoryService(req.body);
        if (category) {
            return res.status(200).json({
                success: true,
                message: "posted category successfully",
                events: category
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "cannot post such category"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const getEvents = async (req, res, next) => {

    try {
        const events = await getEventsService();
        if (events) {
            return res.status(200).json({
                success: true,
                message: "fetched all events successfully",
                events: events
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there are no events"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const deleteEvent = async (req, res, next) => {

    try {
        const event = await deleteEventService(req.params.id);
        if (event) {
            return res.status(200).json({
                success: true,
                message: "deleted event successfully",
                events: event
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there is no such event"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const deleteEventCategory = async (req, res, next) => {

    try {
        const eventCategory = await deleteEventCategoryService(req.params.id);
        if (event) {
            return res.status(200).json({
                success: true,
                message: "deleted event successfully",
                events: eventCategory
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there is no such event"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const getEventsByCategory = async (req, res, next) => {

    try {
        const events = await getEventsByCategoryService(req.params.id);
        console.log("chazzz: " + JSON.stringify(events))
        if (events) {
            return res.status(200).json({
                success: true,
                message: "fetched event successfully",
                events: events
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there is no such event"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

module.exports = { getCategories, postEvent, getCategoryByName, postCategory, getEvents, deleteEvent, deleteEventCategory, getEventsByCategory };