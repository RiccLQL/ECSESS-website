import React from 'react';
import { FormInput, FormInputData } from './FormInput';
import { useForm } from 'react-hook-form';

export interface FormData {
    fields: FormInputData[],
    changeValue: (value: string | File | null, index: number) => void,
    submit: (event: any) => void,
}

export const Form = (props: FormData): JSX.Element => {

    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit((data) => props.submit(data));

    return (
        <form className="form" onSubmit={onSubmit} >
            {props.fields.map((input, index) => {
                return (
                    <FormInput register={register} key={index} type={input.type} name={input.name} placeholder={input.placeholder} index={index} selects={input.selects ? input.selects : undefined} />
                )
            })}
            <input type="submit" />
        </form>
    )
}