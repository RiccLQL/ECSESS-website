import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Divider } from '../components/Divider';
import { Form } from '../components/Form';
import { FormInputData } from '../components/FormInput';
import { List, ListItem } from '../components/List';
import { Title } from '../components/Title';
import { NewsModel } from '../model/modelInterfaces';
import { upload } from '../axios/imageUpload';

export const News = (): JSX.Element => {

    const form: FormInputData[] = [
        {name: "title", type: "text", placeholder: "News Title", value: ""},
        {name: "description", type: "textarea", placeholder: "News Description", value: ""},
        {name: "link", type: "text", placeholder: "News Link", value: ""},
        {name: "image", type: "file", placeholder: "Upload News Cover Image", value: null},
    ]

    const [ news, setNews ] = useState<ListItem[]>([]);

    useEffect(() => {
        async function fetchNews(): Promise<void> {
            const response = await axios.get("/news");
            const data: NewsModel[] = response.data.data;
            let processedData: ListItem[] = data.map(
                value => {
                    return {
                        id: value._id, 
                        data: {
                            title: {value: value.title, formType: "text"},
                            description: {value: value.description, formType: "textarea"},
                            link: {value: value.link, formType: "text"},
                            image: {value: value.image, formType: "file"},
                        }
                    }
                }
            );
            setNews(processedData);
        }

        fetchNews();
    }, [])

    const submitNews = async (data: any): Promise<void> => {
        const imageURL = await upload(data.image.item(0));
        await axios.post("/news", { title: data.title, description: data.description, link: data.link, image: imageURL });
        window.location.reload();
    }

    const submitEdit = async (data: any, id: string, image: string | undefined): Promise<void> => {
        let imageURL: string | null = null;
        if (data.image) {
            imageURL = await upload(data.image.item(0));
        }
        await axios.put("/news", {_id: id, data: {title: data.title, description: data.description, image: imageURL ? imageURL : image, link: data.link}});
        window.location.reload();
    }

    const submitDelete = async (data: any, id: string): Promise<void> => {
        await axios.delete("/news", {data: {_id: id}});
        window.location.reload();
    }

    return (
        <div className="news sixty centered flex-vertical">
            <Title text="Add featured news" />
            <Form fields={form} submit={submitNews} />
            <Divider />
            <Title text="View featured news" />
            <List listItems={news} form={form} submitEdit={submitEdit} submitDelete={submitDelete} />
            <Divider />
        </div>
    )
}