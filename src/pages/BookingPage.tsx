import React, {useEffect, useState} from "react";
import {TagPanel} from "../blocks/TagPanel";
import {ButtonElement, ColorButton} from "../elements/ButtonElement";


const BookingPage=()=>{

    const [tagList, setTags] = useState(['Лекция', 'Практика', 'Экзамен']);
    console.log(tagList);
    const deleteTagFromList = (element: string):void => {
        let a:string[] =  [...tagList];
        a.splice(a.indexOf(element), 1);
        setTags(a);
    }


    return (
        <div>
            asda
            <TagPanel tags={tagList} returnTagFunc={deleteTagFromList}/>
            <ButtonElement title='Забронировать' color={ColorButton.BookingButton}/>
        </div>
    );
}

export default BookingPage;