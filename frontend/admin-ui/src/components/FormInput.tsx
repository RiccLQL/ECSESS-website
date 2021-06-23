import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface FormInputData {
    type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "select" | "submit" | "tel" | "text" | "textarea" | "time" | "url" | "week",
    placeholder: string,
    value: string | File | null,
    name: string,
    selects?: string[],
}

interface Props {
    type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "select" | "submit" | "tel" | "text" | "textarea" | "time" | "url" | "week",
    placeholder: string,
    name: string,
    index: number,
    selects?: string[],
    register: UseFormRegister<FieldValues>,
}

export const FormInput = (props: Props): JSX.Element => {

    const [ type, setType ] = useState<string>('text');

    useEffect(() => {
        setType(props.type);
    }, [props.type])

    return (
        <div className="form-input">
            { type === 'file' ?
                <div>
                    <input type={type} id="file-input" {...props.register(props.name)} />
                </div>
                :
                type === 'select' ?
                <div>
                    <h3>{props.placeholder}</h3>
                    <select placeholder={props.placeholder} {...props.register(props.name)}>
                        {props.selects?.map((value, index) => {
                            return (
                                <option key={index} value={value}>{value}</option>
                            )
                        })};
                    </select>
                </div>
                :
                type === 'textarea' ?
                <textarea placeholder={props.placeholder} {...props.register(props.name)} />
                :
                <input required placeholder={props.placeholder} {...props.register(props.name)} type={type}/>
            }
        </div>
    )
}