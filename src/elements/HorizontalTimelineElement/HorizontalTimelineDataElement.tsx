import style from './HorizontalTimelineDataElement.module.css'
import React from "react";


export const HorizontalTimelineDataElement: React.FC<{
    title: string,
    x:number,
    width:number,

}> = ({title, x, width}) => {


    return (
        <div className={style.timelineData}
            style={{
                left:x,
                width:width
            }}
        >
            {title}
        </div>
    );

}