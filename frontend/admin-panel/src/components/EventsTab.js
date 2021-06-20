import React, { useState, useEffect } from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../styles/Form.css';
import FormData from 'form-data';

const EventsTab = () => {

    const [value, setValue] = useState(0); // integer state

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(process.env.REACT_APP_VUE_APP_CLOUDINARY_URL)
        const url = `${process.env.REACT_APP_VUE_APP_CLOUDINARY_URL}/image/upload`;
        let formdata = new FormData();
        console.log(data.image[0])
        formdata.append("file", data.image[0]);
        formdata.append("upload_preset", "ml_default");
        const config = {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        };
        axios.post(url, formdata, config).then((result) => {
            data.image = result.data.url;
            axios.post("/api/admin/events", data);
        });
        setValue(value === 0 ? 1 : 0);
    };

    return (
        <div className="main-wrapper" >
            <h3>Create Event</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField message="Event Name" name="title" enter={register({ required: true })} type="text"/>
                <FormField message="Image" name="image" enter={register({ required: true })} type="file"/>
                <FormField message="Description" name="description" enter={register({ required: true })} type="textarea"/>
                <FormField message="Date" name="date" enter={register({ required: true })} type="date"/>
                <FormField message="Link" name="link" enter={register({ required: true })} type="text"/>
                <FormField message="Event Category" name="category" enter={register({ required: true })} type="select"/>

                <input className="submit-button" type="submit" />
            </form>
        </div>
    );
};

export default EventsTab;