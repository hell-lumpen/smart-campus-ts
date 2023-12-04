import React, {MouseEventHandler, ReactElement} from "react";
import styleTag from './TagElement.module.css'
import styled from "styled-components";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import {IconElement} from "../IconElement/IconElement";

const TagSpan = styled.div`
  font-weight: 400;
  background: #66ffff;
  //width: max-content;
  
  //text-align: left;
  
  width: max-content;
  padding: 0 5px;
  border-radius: 5px;
  //border-radius: 2px;
  margin-right: 7px;
  margin-bottom: 7px;
  height: max-content;
  line-height: 20px;
  font-size: 16px;
  
  //padding: 2px 8px;
  
  
  
  
  position: relative;
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
    color:string,
    callback?: (tag:string)=>void
}


export const TagElement:React.FC<TagElementData> = ({title, color,  callback}): ReactElement => {
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
                <TagSpan className={styleTag.tag} style={{background: color}}>
                    <span className={styleTag.tagTitle}>{title}</span>
                    <IconElement type={'CloseIcon'}/>
                </TagSpan>
            </div>;
    } else {
        result =
            <TagSpan style={{background: color}} >
                <span className={styleTag.tagTitle}>{title}</span>
            </TagSpan>;
    }

    return (
        result
    );
}