import React, {useEffect, useState} from "react";
import {TagPanel} from "../blocks/TagPanel";
import {ButtonElement, ColorButton} from "../elements/ButtonElement";
import {BookingComponent, BookingComponentData} from "../blocks/BookingComponent/BookingComponent";


const BookingPage=()=>{

    const [tagList, setTags] = useState(['Лекция', 'Практика', 'Экзамен']);
    const deleteTagFromList = (element: string):void => {
        let a:string[] =  [...tagList];
        a.splice(a.indexOf(element), 1);
        setTags(a);
    }

    let data_booking:BookingComponentData  = {
        description: "Теория автоматов и формальных языков",
        owner: "Романенков Александр Михайлович",
        startTime: "9:00",
        endTime: "10:45",
        status: "Идёт",
        tag: "Лекция",
        tagColor: "#AFDAFC"};

    let data_booking1:BookingComponentData  = {
        description: "ВАРКТ",
        owner: "Долбаёб Долбаёбович Долбаёбов",
        startTime: "9:00",
        endTime: "10:45",
        status: "Идёт",
        tag: "Лекция",
        tagColor: "#AFDAFC"};

    let data_booking2:BookingComponentData  = {
        description: "Численные методы",
        owner: "Чумакова Екатерина Витальевна",
        startTime: "9:00",
        endTime: "10:45",
        status: "Идёт",
        tag: "Лекция",
        tagColor: "#AFDAFC"};

    return (
        <div>

            <TagPanel tags={tagList} returnTagFunc={deleteTagFromList}/>
            <ButtonElement title='Забронировать' color={ColorButton.BookingButton}/>

            <BookingComponent {...data_booking}/>
            <BookingComponent {...data_booking1}/>
            <BookingComponent {...data_booking2}/>
        </div>
    );
}

export default BookingPage;