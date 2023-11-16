import React, {useEffect, useState} from "react";
import {TagPanel} from "../widgets/TagPanel";


const BookingPage=()=>{

    const [tagList, setTagList] = useState<number>(0);
    setTagList(0);
    console.log(tagList);
    // useEffect(() => {
    //     let a:number = 1;
    //     a++;
    //     console.log(a);
    // }, []);

    const deleteTagFromList = (element: number) => {

    }


    return (
        <div>
        </div>
    );
}

export default BookingPage;