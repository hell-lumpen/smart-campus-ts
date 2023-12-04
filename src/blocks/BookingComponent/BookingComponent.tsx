import React from "react";
import {TagElement} from "../../elements/TagElement/TagElement";
import style from "./BookingComponent.module.css"
import {ProfileSpan} from "../../elements/ProfileSpan";

export type BookingComponentData = {
    tag: string;
    tagColor: string;
    status: string;
    description: string;
    owner: string;
    startTime: string;
    endTime: string;
}


export const BookingComponent: React.FC<BookingComponentData> = (
    data: BookingComponentData
) => {

    const tagComponent = <TagElement title={data.tag} color={data.tagColor}/>;

    return (
        <div className={style.bookingContainer}>
            {tagComponent}
            <div className={style.descriptionTimeContainer}>
                <div className={style.descriptionBlock}>
                    {data.description}
                </div>

                <div>
                    {data.startTime} - {data.endTime}
                </div>
            </div>

            <ProfileSpan fio={data.owner}/>


            {/*<div className={style.bookingData} style={{padding : '0px 10px'}}>*/}


            {/*    <div className={style.descriptionBlock}>*/}
            {/*        {data.description}*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        {data.startTime} - {data.endTime}*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<div style={{marginLeft: '10px'}}>*/}
            {/*    {data.owner}*/}

            {/*</div>*/}
            {/*<TagElement title={data.status} color={'#81F17F'}/>*/}
        </div>
    );
}

