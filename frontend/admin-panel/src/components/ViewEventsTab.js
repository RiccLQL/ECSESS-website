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

    async function getEvents() {
        const data = await axios.get("/api/admin/events");
        return data.data.data;
    }
    
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsList = await getEvents();
            console.log(eventsList);
            setEvents(eventsList);
        }

        fetchEvents();
    }, []);

    return (
        <div>
            <div>
                <h3>
                    View Events
                </h3>
            </div>
            <div>
                <ul className="grid">
                    {events.map(value => { return (                        
                        <div className="grid-subelement" key={value._id}>
                            <div className="grid-subpanel">
                                <p id="member-name" className="grid-subelement-name">{value.title}</p>
                                <button className="deleteButton" onClick={((e) => deleteEvent(e, value._id))}>Delete</button>
                            </div>
                        </div>
                    )})}
                </ul>
            </div>
        </div>
    )

}

export default ViewEventsTab;