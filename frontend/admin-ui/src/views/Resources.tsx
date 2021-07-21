import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Divider } from '../components/Divider';
import { Form } from '../components/Form';
import { FormInputData } from '../components/FormInput';
import { List, ListItem } from '../components/List';
import { Title } from '../components/Title';
import { ResourceModel, ResourceCategoryModel } from '../model/modelInterfaces';
import { upload } from '../axios/imageUpload';

export const Resources = (): JSX.Element => {

    const [ resources, setResources ] = useState<ListItem[]>([]);
    const [ resourceCategories, setResourceCategories] = useState<ListItem[]>([]);
    const [ resourceCategoriesString, setResourceCategoriesString ] = useState<string[]>([]);

    const form: FormInputData[] = [
        {name: "title", type: "text", placeholder: "Resource Title", value: ""},
        {name: "description", type: "textarea", placeholder: "Resource Description", value: ""},
        {name: "link", type: "text", placeholder: "Resource Link", value: ""},
        {name: "image", type: "file", placeholder: "Upload Resource Cover Image", value: null},
        {name: "category", type: "select", placeholder: "Resource Category", selects: resourceCategoriesString, value: ""},
    ]

    const resourceCategoriesForm: FormInputData[] = [
        {name: "name", type: "text", placeholder: "Resource Category Name", value: ""},
    ]

    useEffect(() => {
        async function fetchResourceCategories(): Promise<void> {
            const response = await axios.get("/resources/categories");
            const data: ResourceCategoryModel[] = response.data.data;
            setResourceCategoriesString(data.map(value => value.name));
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
            setResourceCategories(processedData);
        }

        async function fetchResources(): Promise<void> {
            const response = await axios.get("/resources");
            const data: ResourceModel[] = response.data.data;
            let processedData: ListItem[] = data.map(
                value => {
                    return {
                        id: value._id, 
                        data: {
                            title: {value: value.title, formType: "text"},
                            description: {value: value.description, formType: "textarea"},
                            link: {value: value.link, formType: "text"},
                            image: {value: value.image, formType: "file"},
                            category: {value: value.category, formType: "select"},
                        }
                    }
                }
            );
            setResources(processedData);
        }

        fetchResourceCategories();
        fetchResources();
    }, [])

    const submitResources = async (data: any): Promise<void> => {
        const imageURL = await upload(data.image.item(0));
        await axios.post("/resources", { title: data.title, description: data.description, link: data.link, image: imageURL, category: data.category });
        window.location.reload();
    }

    const submitEdit = async (data: any, id: string, image: string | undefined): Promise<void> => {
        let imageURL: string | null = null;
        if (data.image) {
            imageURL = await upload(data.image.item(0));
        }
        await axios.put("/resources", {_id: id, data: {title: data.title, description: data.description, image: imageURL ? imageURL : image, link: data.link, category: data.category}});
        window.location.reload();
    }

    const submitDelete = async (data: any, id: string): Promise<void> => {
        await axios.delete("/resources", {data: {_id: id}});
        window.location.reload();
    }

    const submitResourceCategory = (data: any): void => {
        if (!resourceCategories.includes(data.name)) {
            axios.post("/resources/category", { name: data.name });
        }
        window.location.reload();
    }

    const submitRCEdit = async (data: any, id: string): Promise<void> => {
        await axios.put("/resources/category", { _id: id, data: { name: data.title } });
        window.location.reload();
    }

    const submitRCDelete = async (data: any, id: string): Promise<void> => {
        await axios.delete("/resources/category", {data: {_id: id}});
        window.location.reload();
    }

    return (
        <div className="news sixty centered flex-vertical">
            <Title text="Add resource" />
            <Form fields={form} submit={submitResources} />
            <Divider />
            <Title text="View resources" />
            <List listItems={resources} form={form} submitEdit={submitEdit} submitDelete={submitDelete} />
            <Divider />
            <Title text="Add a resource category"/>
            <Form fields={resourceCategoriesForm} submit={submitResourceCategory} />
            <Divider />
            <Title text="View, Edit and Delete resource category" />
            <List listItems={resourceCategories} form={resourceCategoriesForm} submitEdit={submitRCEdit} submitDelete={submitRCDelete} />
        </div>
    )
}