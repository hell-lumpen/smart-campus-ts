import styled from "styled-components";
import {BookingComponent, BookingComponentData} from "../../blocks/BookingComponent/BookingComponent";
import React from "react";
import {TimelineElement} from "../../elements/TimelineElement/TimelineElement";


const RoomWidgetStyle = styled.div`
  border: 1px solid #C7C7C7;
  background: #f1f1f1;
  //f1f7f7
  //background: #f4f8f9;
  //background: #F1F1F1;
  //background: #F0F0F0;

  width: 95%;
  //height: max-content;
  height: 700px;

  border-radius: 15px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
`;


const RoomWidgetTitleStyle = styled.h2`
  //background: blue;
  color: #0095DA;
  width: max-content;
  height: max-content;
  margin-left: 15px;

`;

export const RoomWidget = () => {

    let data_booking: BookingComponentData = {
        description: "Теория автоматов и формальных языков",
        owner: "Романенков Александр Михайлович",
        startTime: "9:00",
        endTime: "10:45",
        status: "Идёт",
        tag: "Лекция",
        tagColor: "#AFDAFC"
    };

    let data_booking1: BookingComponentData = {
        description: "ВАРКТ",
        owner: "Долбаёб Долбаёбович Долбаёбов",
        startTime: "9:00",
        endTime: "10:45",
        status: "Идёт",
        tag: "Лекция",
        tagColor: "#AFDAFC"
    };

    let data_booking2: BookingComponentData = {
        description: "Численные методы",
        owner: "Чумакова Екатерина Витальевна",
        startTime: "9:00",
        endTime: "10:45",
        status: "Идёт",
        tag: "Лекция",
        tagColor: "#AFDAFC"
    };

    const dates: { start_time: Date, end_time: Date }[] = [
        {
            start_time: new Date(2014, 11, 31, 10, 45, 0),
            end_time: new Date(2014, 11, 31, 12, 15, 0),
        },

        {
            start_time: new Date(2014, 11, 31, 16, 30, 0),
            end_time: new Date(2014, 11, 31, 18, 0, 0),
        },

        {
            start_time: new Date(2014, 11, 31, 18, 15, 0),
            end_time: new Date(2014, 11, 31, 19, 45, 0),
        },
    ];


    return (
        <RoomWidgetStyle>
            <RoomWidgetTitleStyle>Аудитория It-5</RoomWidgetTitleStyle>
            {/*<BookingComponent {...data_booking}/>*/}
            {/*<BookingComponent {...data_booking1}/>*/}
            {/*<BookingComponent {...data_booking2}/>*/}
            <TimelineElement dates={dates}/>

        </RoomWidgetStyle>

    );
}