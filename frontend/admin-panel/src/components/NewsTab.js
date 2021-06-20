import React, { useState, useEffect } from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../styles/Grid.css';
import '../styles/Form.css';

const NewsTab = () => {

    function deleteNews(e, newsId) {
        axios.delete(`/api/admin/home/news/${newsId}`)
    }

    const [ news, setNews ] = useState({});

    useEffect(() => {
        const fetchNews = async () => {   
                const newsList = await axios.get("/api/admin/home/news");
                setNews(newsList.data.news);
        };

        fetchNews();
    }, []);

    let newsArray = []
    if (news !== undefined) {
        const newsList = news;
        for (let i = 0; i < newsList.length; i++) {
            newsArray.push(
                <li className="grid-element" key={newsList[i].id}>
                    <div className="grid-panel">
                        <p id="member-name" className="grid-element-name">{newsList[i].name}</p>
                        <button className="deleteButton" onClick={((e) => deleteNews(e, newsList[i].id))}>Delete</button>
                    </div>
                </li>
            )
        }
    }
    const [value, setValue] = useState(0); // integer state
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.image = 'https://res.cloudinary.com/ecsess-website/image/upload/v1623603856/shutterstock_1104908693_recolored_resized_bnsjcb.jpg';
        axios.post("/api/admin/news", data);

        setValue(value === 0 ? 1 : 0); // update the state to force render
    };

    return (
        <div className="main-wrapper" >
            <div className="grid-wrapper">
                <ul className="grid">
                    {newsArray}
                </ul>
            </div>
            <h3>Create News</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField message="Title" name="title" enter={register({ required: true })} type="text"/>
                <FormField message="Image" name="image" enter={register({ required: true })} type="file"/>
                <FormField message="Blurb" name="description" enter={register({ required: true })} type="textarea"/>
                <FormField message="Link" name="link" enter={register({ required: true })} type="text"/>

                <input className="submit-button" type="submit" />
            </form>
        </div>
    );
};

export default NewsTab;