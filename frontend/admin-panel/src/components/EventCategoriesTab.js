import React from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../styles/Form.css';

const EventCategoriesTab = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
            axios.post("/api/admin/events/category", data);
    };

    return (
        <div className="main-wrapper" >
            <h3>Create Event Category</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField message="Event Category Name" name="name" enter={register({ required: true })} type="text"/>
                <input className="submit-button" type="submit" />
            </form>
        </div>
    );
};

export default EventCategoriesTab;