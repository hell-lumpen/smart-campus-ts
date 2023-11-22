import React, {MouseEventHandler, ReactElement} from "react";
import styleTag from './TagElement.module.css'
import styled from "styled-components";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import {IconElement} from "./IconElement";

const TagSpan = styled.div<{isFull:boolean}>`
  font-weight: 400;
  background: #66ffff;
  //width: max-content;
  width: ${({isFull}) => (isFull?'inherit':'max-content')};
  padding: ${({isFull}) => (isFull?'0 10px':'0')};
  margin-left: ${({isFull}) => (isFull?'-10px':'0')};
  //text-align: left;
  
  height: max-content;
  line-height: 20px;
  font-size: 14px;
  
  //padding: 2px 8px;
  
  border:  ${({isFull}) => (isFull?'none':'1px solid #59DEDE')};
  border-radius:  ${({isFull}) => (isFull?'none':'15px')};
  
  
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: left;
`;

type col = '#66ffff' | 'red';

const processingEventMouse = (event: React.MouseEvent<HTMLDivElement>) =>{
    // console.log(event.type);
}

type TagElementData = {
    title:string,
    color:string;
    isFullWidth?:boolean,
    callback?: (tag:string)=>void
}


export const TagElement:React.FC<TagElementData> = ({title, color,  isFullWidth = false, callback}): ReactElement => {
    let result: ReactElement;



    if (callback) {
        result =
            <div
                 onMouseDown={processingEventMouse}
                 onMouseUp={processingEventMouse}
                 onClick={()=>{
                     if (callback)
                         callback(title);
                 }}
                 id={title}
            >
                <TagSpan isFull={isFullWidth} className={styleTag.tag} style={{background: color}}>
                    <span className={styleTag.tagTitle}>{title}</span>
                    <IconElement type={'CloseIcon'}/>
                </TagSpan>
            </div>;
    } else {
        result =
            <TagSpan isFull={isFullWidth} style={{background: color}} >
                <span className={styleTag.tagTitle}>{title}</span>
            </TagSpan>;
    }

    return (
        result
    );
}