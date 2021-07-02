import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { upload } from '../axios/imageUpload';
import { Divider } from '../components/Divider';
import { Form } from '../components/Form';
import { FormInputData } from '../components/FormInput';
import { List, ListItem } from '../components/List';
import { Title } from '../components/Title';
import { MemberModel } from '../model/modelInterfaces';

export const Council = (): JSX.Element => {

    const form: FormInputData[] = [
        {name: "name", type: "text", placeholder: "Name", value: ""},
        {name: "position", type: "text", placeholder: "Position", value: ""},
        {name: "email", type: "text", placeholder: "ECSESS Email", value: ""},
        {name: "description", type: "textarea", placeholder: "Bio", value: ""},
        {name: "type", type: "select", placeholder: "Member Type", selects: ["Executive", "Representative"], value: ""},
        {name: "image", type: "file", placeholder: "Upload Member Picture", value: null},
    ]

    const [ execs, setExecs ] = useState<ListItem[]>([]);
    const [ reps, setReps ] = useState<ListItem[]>([]);
    const memberCategories = [ "Executive", "Representative" ];

    useEffect(() => {
        async function fetchExecMembers(): Promise<void> {
            const response = await axios.get("/council/members/execs");
            const data: MemberModel[] = response.data.data;
            let processedData: ListItem[] = data.map(
                value => {
                    return {
                        id: value._id,
                        data: {
                            title: {value: value.name, formType: "text"}, 
                            description: {value: value.description, formType: "textarea"}, 
                            image: {value: value.image, formType: "file"}, 
                            link: {value: value.email, formType: "text"},
                            otherProperty: {value: {name: "Position", value: value.position}, formType: "text"},
                            category: {value: 'Executive', formType: "select"},
                        }
                    }
                }
            );
            setExecs(processedData);
        }

        async function fetchRepMembers(): Promise<void> {
            const response = await axios.get("/council/members/reps");
            const data: MemberModel[] = response.data.data;
            let processedData: ListItem[] = data.map(
                value => {
                    return {
                        id: value._id,
                        data: {
                            title: {value: value.name, formType: "text"}, 
                            description: {value: value.description, formType: "textarea"}, 
                            image: {value: value.image, formType: "file"}, 
                            link: {value: value.email, formType: "text"},
                            otherProperty: {value: {name: "Position", value: value.position}, formType: "text"},
                            category: {value: 'Representative', formType: "select"},
                        }
                    }
                }
            );
            setReps(processedData);
        }

        fetchExecMembers();
        fetchRepMembers();
    }, []);

    const submitMember = async (data: any): Promise<void> => {
        const imageURL = await upload(data.image.item(0));
        await axios.post("/council/member", { name: data.name, description: data.description, image: imageURL, position: data.position, email: data.email, category: data.type});
        window.location.reload();
    }

    const submitEdit = async (data: any, id: string, image: string | undefined): Promise<void> => {
        let imageURL: string | null = null;
        if (data.image) {
            imageURL = await upload(data.image.item(0));
        }
        await axios.put("/council/member", {_id: id, data: {name: data.title, position: data.otherProperty, description: data.description, image: imageURL ? imageURL : image, email: data.link, category: data.category}});
        window.location.reload();
    }

    const submitDelete = async (data: any, id: string): Promise<void> => {
        await axios.delete("/council/member", {data: {_id: id}});
        window.location.reload();
    }

    return (
        <div className="council sixty centered flex-vertical">
            <Title text="Add a Council Member" />
            <Form fields={form} submit={submitMember}/>
            <Divider />
            <Title text="View, Edit and Delete Council Members" />
            <h2>Execs</h2>
            <List listItems={execs} form={form} submitEdit={submitEdit} submitDelete={submitDelete} categories={memberCategories}/>
            <h2>Reps</h2>
            <List listItems={reps} form={form} submitEdit={submitEdit} submitDelete={submitDelete} categories={memberCategories}/>
        </div>
    )
}