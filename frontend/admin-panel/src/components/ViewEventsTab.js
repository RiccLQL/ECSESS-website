import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Grid.css';

const ViewEventsTab = () => {

    function deleteEvent(e, eventId) {
        axios.delete(`/api/admin/events/${eventId}`)
    }

    function deleteEventCategory(e, eventCategoryId) {
        axios.delete(`/api/admin/events/category/${eventCategoryId}`)
    }

    async function getEventCategories() {
        return axios.get("/api/admin/events/categories");
    }

    async function getEventsByCategory(eventCategoryId) {
        return axios.get(`/api/admin/events/byCategory/${eventCategoryId}`);
    }

    const [eventCategories, setEventCategories] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEventCategories = async () => {
            const eventCategoryList = await getEventCategories();
            setEventCategories(eventCategoryList.data.categories);

            let addingToEvents = [];
            for (let i = 0; i < eventCategoryList.data.categories.length; i++) {
                const eventsList = await getEventsByCategory(eventCategoryList.data.categories[i].id)
                eventsList === undefined ? addingToEvents.push([]) : addingToEvents.push(eventsList.data.events);
            }
            setEvents(addingToEvents);
        }

        fetchEventCategories();
    }, []);

    let eventsDisplay = []
    if (events !== undefined && eventCategories !== undefined) {
        for (let i = 0; i < eventCategories.length; i++) {
            let eventsArray = [];
            let eventsList = events;
            let eventCategoriesList = eventCategories;
            eventsArray.push(
                !eventsList[i] || eventsList[i].length === 0 ? 
                    <div className="grid-panel">
                        <p id="member-name" className="grid-element-name">{eventCategoriesList[i].name}</p>
                        <button className="deleteButton" onClick={((e) => deleteEventCategory(e, eventCategoriesList[i].id))}>Delete</button>
                    </div>
                :
                    <div className="grid-panel">
                        <p id="member-name" className="grid-element-name">{eventCategoriesList[i].name}</p>
                    </div>
            )
            if (eventsList[i]) {
                for (let j = 0; j < eventsList[i].length; j++) {
                    eventsArray.push(
                        <div className="grid-subelement" key={eventsList[i][j].id}>
                            <div className="grid-subpanel">
                                <p id="member-name" className="grid-subelement-name">{eventsList[i][j].name}</p>
                                <button className="deleteButton" onClick={((e) => deleteEvent(e, eventsList[i][j].id))}>Delete</button>
                            </div>
                        </div>
                    )
                }
            }
            eventsDisplay.push(<div className="grid-element" key={eventCategoriesList[i].name}>{eventsArray}</div>);
        }
    }

    return (
        <div>
            <div>
                <h3>
                    View Events
                </h3>
            </div>
            <div>
                <ul className="grid">
                    {eventsDisplay}
                </ul>
            </div>
        </div>
    )

}

export default ViewEventsTab;