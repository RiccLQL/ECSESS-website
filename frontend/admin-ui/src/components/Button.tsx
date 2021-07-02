import React from 'react'
import { ButtonSizes } from './Enums'

interface Props {
  size: ButtonSizes,
  text: string,
  handleClick: (params?: string) => void,
  params?: string,
}

export const Button = (props: Props): JSX.Element => {

  return (
    <div>
      <button onClick={(e) => {props.handleClick(props.params)}} type="button" >
        {props.text}
      </button>
    </div>
  )
}