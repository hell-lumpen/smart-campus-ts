import React, {useEffect, useState} from "react";
import booking_style from './BookingPage.module.css'
import {TagPanel} from "../../blocks/TagPanel";
import {ButtonElement, ColorButton} from "../../elements/ButtonElement/ButtonElement";
import {BookingComponent, BookingComponentData} from "../../blocks/BookingComponent/BookingComponent";
import {NavigationPanel} from "../../blocks/NavigationPanel/NavigationPanel";
import {NavigationDate} from "../../blocks/NavigationDate/NavigationDate";
import {BookingAddButton} from "../../blocks/BookingAddButton/BookingAddButton";
import {RoomWidget} from "../../widgets/RoomWidget/RoomWidget";
import {HorizontalTimelineElement} from "../../elements/HorizontalTimelineElement/HorizontalTimelineElement";


const BookingPage = () => {

    const [tagList, setTags] = useState(['Лекция', 'Практика', 'Экзамен']);
    const deleteTagFromList = (element: string): void => {
        let a: string[] = [...tagList];
        a.splice(a.indexOf(element), 1);
        setTags(a);
    }



    return (
        <div className={booking_style.bookingContainer}>

            {/*<TagPanel tags={tagList} returnTagFunc={deleteTagFromList}/>*/}
            <div className={booking_style.booking_card_container}>
                {/*<NavigationDate/>*/}
                {/*<BookingAddButton/>*/}
                <HorizontalTimelineElement/>
                <RoomWidget/>


                {/*<BookingComponent {...data_booking}/>*/}
                {/*<BookingComponent {...data_booking1}/>*/}
                {/*<BookingComponent {...data_booking2}/>*/}
            </div>


        </div>
    );
}

export default BookingPage;