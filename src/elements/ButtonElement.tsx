import styled from "styled-components";
import React, {MouseEventHandler, ReactElement} from "react";
import style from './ButtonElement.module.css'
import {IconElement} from "./IconElement";


interface ButtonElementData {
    title: string;
    color: ColorButton;
    callback?: () => {}
};

export enum ColorButton {
    'BookingButton' = '#32BF4D',
    'SimpleButton' = 'white'
}


export enum ColorButtonText {
    'BookingButton' = '#32BF4D',
    'SimpleButton' = 'white'
}

const Button = styled.button`
  font-weight: 500;
  font-size: 16px;

  color: black;
  //border: 1px solid aqua;
  border: none;
  
  width: max-content;
  padding: 2px 8px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  //width: 500px;

  align-items: center;
  justify-content: center;

  position: relative;
  margin-left: 50px;
  margin-top: 50px;

`;

export const ButtonElement: React.FC<ButtonElementData> = ({title, color, callback}) => {


    return (
        <Button style={{background: color}} onClick={() => {
            if (callback)
                callback()
        }}>
            <IconElement type={'BookingIcon'}/>
            {title}
        </Button>
    );


}