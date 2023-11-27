import styled from "styled-components";
import React, {MouseEventHandler, ReactElement} from "react";
import style from './ButtonElement.module.css'
import {IconElement} from "../IconElement/IconElement";
import {ReactComponent as NavigateAfterSvg, ReactComponent as NavigateBeforeSvg} from "*.svg";

interface ButtonElementData {
    type: TypeButton;
    title?: string;
    callback?: () => void
}

export type TypeButton = 'bookingButton' | 'leftButton' | 'rightButton' | 'navigationButton';

export enum ColorButton {
    'BookingButton' = '#32BF4D',
    'SimpleButton' = 'none'
}


const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  
  width: max-content;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 18px;
  //color: black;
  //border-radius: 3px;
  //position: relative;
  //margin-left: auto;
`;


export const ButtonElement: React.FC<ButtonElementData> = ({type, title, callback}) => {
    let resultButton;
    let background = 'white';
    let color = 'black';
    let border = 'none'
    let border_radius = '0'
    let padding = '0'
    switch (type) {
        case "bookingButton":
            // 32BF4D
            padding = '5px 2px';
            background = '#00C800';
            border_radius = '6px'
            color = 'white';
            resultButton = <><IconElement type={'BookingIcon'}/>{title}</>
            break;
        case "leftButton":
            resultButton = <IconElement type='NavigateBefore'/>
            break;
        case "rightButton":
            resultButton = <IconElement type='NavigateAfter'/>
            break;
        case "navigationButton":
            resultButton = <><IconElement type={'BookingIcon'}/> Забронировать</>
            break;
    }


    return (
        <Button onClick={() => {
            if (callback) callback()
        }}
                style={{
                    color:color,
                    background: background,
                    border:border,
                    borderRadius:border_radius,
                    padding:padding,
                }}
        >
            {resultButton}
        </Button>
    );
}