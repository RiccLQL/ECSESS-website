import React from 'react';

interface Props {
    text: string,
}

export const Title = (props: Props): JSX.Element => {



    return (
        <div className="title margin-bottom">
            <h1>{props.text}</h1>
        </div>
    )
}