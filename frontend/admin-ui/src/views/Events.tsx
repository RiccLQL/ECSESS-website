import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Divider } from '../components/Divider';
import { Form } from '../components/Form';
import { FormInputData } from '../components/FormInput';
import { List, ListItem } from '../components/List';
import { Title } from '../components/Title';
import { EventCategoryModel, EventModel } from '../model/modelInterfaces';
import { upload } from '../axios/imageUpload';

export const Events = (): JSX.Element => {

    const [ events, setEvents ] = useState<ListItem[]>([]);
    const [ eventCategories, setEventCategories] = useState<ListItem[]>([]);
    const [ eventCategoriesString, setEventCategoriesString ] = useState<string[]>([]);

    useEffect(() => {
        async function fetchEventCategories(): Promise<void> {
            const response = await axios.get("/events/categories");
            const data: EventCategoryModel[] = response.data.data;
            setEventCategoriesString(data.map(value => value.name));
            let processedData: ListItem[] = data.map(
                value => {
                    return {
                        id: value._id, 
                        data: {
                            title: {value: value.name, formType: "text"},
                        }
                    }
                }
            );
            setEventCategories(processedData);
        }

        async function fetchEvents(): Promise<void> {
            const response = await axios.get("/events");
            const data: EventModel[] = response.data.data;
            let processedData: ListItem[] = data.map(
                value => {
                    return {
                        id: value._id,
                        data: {
                            title: {value: value.title, formType: "text"}, 
                            description: {value: value.description, formType: "textarea"},
                            category: {value: value.category, formType: "select"},
                            image: {value: value.image, formType: "file"}, 
                            link: {value: value.link, formType: "text"}, 
                            otherProperty: {value: {name: "Date", value: value.date}, formType: "date"},
                        }
                    }
                }
            );
            setEvents(processedData);
        }

        fetchEventCategories();
        fetchEvents();
    }, []);
    
    const form: FormInputData[] = [
        {name: "title", type: "text", placeholder: "Event Title", value: ""},
        {name: "description", type: "textarea", placeholder: "Event Description", value: ""},
        {name: "date", type: "date", placeholder: "Event Date", value: null},
        {name: "link", type: "text", placeholder: "Event Link", value: ""},
        {name: "category", type: "select", placeholder: "Event Category", selects: eventCategoriesString, value: ""},
        {name: "image", type: "file", placeholder: "Upload Event Picture", value: null},
    ]

    const eventCategoriesForm: FormInputData[] = [
        {name: "name", type: "text", placeholder: "Event Category Name", value: ""},
    ]

    const submitEvent = async (data: any): Promise<void> => {
            const imageURL = await upload(data.image.item(0));
            await axios.post("/events", { title: data.title, description: data.description, date: data.date, link: data.link, category: data.category, image: imageURL});
            window.location.reload();
    }

    const submitEdit = async (data: any, id: string, image: string | undefined): Promise<void> => {
        let imageURL: string | null = null;
        if (data.image) {
            imageURL = await upload(data.image.item(0));
        }
        await axios.put("/events", {_id: id, data: {title: data.title, date: data.otherProperty, description: data.description, image: imageURL ? imageURL : image, link: data.link, category: data.category}});
        window.location.reload();
    }

    const submitDelete = async (data: any, id: string): Promise<void> => {
        await axios.delete("/events", {data: {_id: id}});
        window.location.reload();
    }

    const submitEventCategory = (data: any): void => {
        if (!eventCategories.includes(data.name)) {
            axios.post("/events/category", { name: data.name });
        }
        window.location.reload();
    }

    const submitECEdit = async (data: any, id: string): Promise<void> => {
        await axios.put("/events/category", { _id: id, data: { name: data.title } });
        window.location.reload();
    }

    const submitECDelete = async (data: any, id: string): Promise<void> => {
        await axios.delete("/events/category", {data: {_id: id}});
        window.location.reload();
    }

    return (
        <div className="events sixty centered flex-vertical">
            <Title text="Add an Event" />
            <Form fields={form} submit={submitEvent}/>
            <Divider />
            <Title text="View, Edit and Delete Events" />
            <List listItems={events} form={form} submitEdit={submitEdit} submitDelete={submitDelete} categories={eventCategoriesString}/>
            <Divider />
            <Title text="Add an event category"/>
            <Form fields={eventCategoriesForm} submit={submitEventCategory} />
            <Divider />
            <Title text="View, Edit and Delete Event Categories" />
            <List listItems={eventCategories} form={eventCategoriesForm} submitEdit={submitECEdit} submitDelete={submitECDelete} />
        </div>
    )
}