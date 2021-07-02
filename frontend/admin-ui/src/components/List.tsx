import React from 'react';
import { useState } from 'react';
import { Button } from './Button';
import { ButtonSizes } from './Enums';
import { Form } from './Form';
import { FormInputData } from './FormInput';

export interface ListItem {
    id: string,
    data: {
        title: {value: string, formType: "text"},
        description?: {value: string, formType: "textarea"},
        category?: {value: string, formType: "select"},
        link?: {value: string, formType: "text"},
        image?: {value: string, formType: "file"},
        otherProperty?: {value: {name: string, value: string | Date}, formType: "text" | "date" },
    },
}

interface Props {
    listItems: ListItem[];
    form: FormInputData[];
    submitEdit: (data: any, id: string, image: string | undefined) => void;
    submitDelete: (data: any, id: string) => void;
    categories?: string[];
}

export const List = (props: Props): JSX.Element => {

    const [ edit, toggleEdit ] = useState<boolean>(false);
    const [ currentIndex, setCurrentIndex ] = useState<number>(-1);

    const editItem = (index: string | undefined): void => {
        if (index) {
            let indexInt: number = parseInt(index);
            toggleEdit(!edit);
            setCurrentIndex(indexInt);
        }
    }

    const submitEdit = (data: any, id: string, image: string | undefined): void => {
        props.submitEdit(data, id, image);
    }

    const deleteItem = (data: any, id: string): void => {
        props.submitDelete(data, id);
    }

    return (
        <div className="list">
            {
                props.listItems.map((value: ListItem, index: number) => {
                    return (
                        <div key={index} className="flex-vertical">
                            <h3>{value.data.title.value}</h3>
                            <h4>{value.data.category?.value}</h4>
                            <h4>{value.data.description?.value}</h4>
                            <h4>{value.data.link?.value}</h4>
                            {value.data.otherProperty ? <div className="flex-horizontal"><h4>{value.data.otherProperty.value.name}: {value.data.otherProperty.value.value}</h4></div> : null}
                            {value.data.image ? <img src={value.data.image?.value} alt={value.data.title.value}></img> : null }
                            <Button size={ButtonSizes.medium} text="Edit" handleClick={editItem} params={index.toString()}/>
                            <Button size={ButtonSizes.medium} text="Delete" handleClick={() => {deleteItem(value.data, value.id)}}/>
                        </div>
                    )
                })
            }
            {
                edit ?
                <div>
                    <h2>Editing {props.listItems[currentIndex].data.title.value}</h2>
                    <Form fields={Object.entries(props.listItems[currentIndex].data).map((KV: [string, {value: any, formType: any}]) => {
                        let value: string | Date | null = (KV[1].formType === 'text' || KV[1].formType === 'textarea' || KV[1].formType === 'date' || KV[1].formType === 'select') ?
                            typeof KV[1].value === 'string' ? KV[1].value : KV[1].value.value
                            :
                            null;
                        if (KV[1].formType !== 'select') {
                            let formInput = {type: KV[1].formType, placeholder: KV[0], value: value, name: KV[0]};
                            return formInput;
                        } else {
                            let formInput = {type: KV[1].formType, placeholder: KV[0], selects: props.categories, name: KV[0], value: value}
                            return formInput;
                        }
                    })}
                    submit={(e) => submitEdit(e, props.listItems[currentIndex].id, props.listItems[currentIndex].data.image?.value)}/>
                </div>
                :
                null
            }
        </div>
    )
}