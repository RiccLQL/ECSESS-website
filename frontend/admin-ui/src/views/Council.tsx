import axios from 'axios';
import React from 'react';
import { Divider } from '../components/Divider';
import { Form } from '../components/Form';
import { FormInputData } from '../components/FormInput';
import { List } from '../components/List';
import { Title } from '../components/Title';

export const Council = (): JSX.Element => {

    const form: FormInputData[] = [
        {name: "memberName", type: "text", placeholder: "Name", value: ""},
        {name: "memberPosition", type: "text", placeholder: "Position", value: ""},
        {name: "memberEmail", type: "text", placeholder: "ECSESS Email", value: ""},
        {name: "memberDescription", type: "textarea", placeholder: "Bio", value: ""},
        {name: "memberType", type: "select", placeholder: "Member Type", selects: ["Executive", "Representative"], value: ""},
        {name: "memberImage", type: "file", placeholder: "Upload Member Picture", value: null},
    ]

    const changeValue = (value: string | File | null, index: number): void => {
        form[index].value = value;
    }

    const submitMember = (data: any): void => {
        const url = `${process.env.REACT_APP_CLOUDINARY_URL}/image/upload`;
        let formdata = new FormData();
        formdata.append("file", data.memberImage.item(0));
        formdata.append("upload_preset", "ml_default");
        const config = {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        };
        axios.post(url, formdata, config).then((result) => {
            const imageURL = result.data.secure_url;
            if (data.memberType === "Executive") axios.post("/council/exec", { name: data.memberName, description: data.memberDescription, image: imageURL, position: data.memberPosition, email: data.memberEmail});
            else if (data.memberType === "Representative") axios.post("/council/rep", { name: data.memberName, description: data.memberDescription, image: imageURL, position: data.memberPosition, email: data.memberEmail});
        });
    }

    return (
        <div className="council sixty centered flex-vertical">
            <Title text="Add a Council Member" />
            <Form fields={form} changeValue={changeValue} submit={submitMember}/>
            <Divider />
            <Title text="View, Edit and Delete Council Members" />
            <List />
        </div>
    )
}