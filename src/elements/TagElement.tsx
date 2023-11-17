import React, {MouseEventHandler, ReactElement} from "react";
import style from './TagElement.module.css'
import styled from "styled-components";
import {ReactComponent as CloseSvg} from '../svg_icon/close.svg'
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

const TagSpan = styled.div`
  font-weight: 200;
  background: #66ffff;
  width: max-content;
  padding: 2px 8px;
  border: 1px solid #59DEDE;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  //width: 500px;

  align-items: center;
  justify-content: center;
  
`;

type col = '#66ffff' | 'red';

const processingEventMouse = (event: React.MouseEvent<HTMLDivElement>) =>{
    // console.log(event.type);
}


export const TagElement = (data : {title: string, color: string, callback?: (tag:string)=>void}): ReactElement => {
    let result: ReactElement;



    if (data.callback) {
        result =
            <div
                 onMouseDown={processingEventMouse}
                 onMouseUp={processingEventMouse}
                 onClick={()=>{
                     if (data.callback)
                         data.callback(data.title);
                 }}
                 id={data.title}
            >
                <TagSpan className={style.tag} style={{background: data.color}}>
                    <span className={style.tagTitle}>{data.title}</span>
                    <CloseSvg className={style.closeIcon}/>
                </TagSpan>
            </div>;
    } else {
        result =
            <TagSpan style={{background: data.color}}>
                {data.title}
            </TagSpan>;
    }

    return (
        result
    );
}