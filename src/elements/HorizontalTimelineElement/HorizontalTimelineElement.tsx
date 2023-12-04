import style from './HorizontalTimelineElement.module.css'
import React, {useEffect, useState} from "react";
import {RoomWidget} from "../../widgets/RoomWidget/RoomWidget";
import {HorizontalTimelineDataElement} from "./HorizontalTimelineDataElement";
import {TimelineElement} from "../TimelineElement/TimelineElement";
import {HorizontalTimelineTimeCont} from "./HorizontalTimelineTimeCont";


export interface bookingData {
    startTime?: string,
    endTime?: string,
    bookingTitle?: string,
    bookingRoom?: string,
    bookingOwner?: string,
    tags?: { label: string, color: string }[],
}


export const HorizontalTimelineElement = () => {

    const getCoords = (time_start: string, time_end: string, roomName: string) => {
        let zone_start_time = document.getElementById('timeline_' + time_start);
        // console.log('time', zone_start_time);

        let zone_end_time = document.getElementById('timeline_' + time_end);
        let zone_0 = document.getElementById('timeline_' + '08:00');
        let zone_room = document.getElementById('room_' + roomName);
        if (zone_0 === null || zone_start_time === null || zone_end_time === null || zone_room === null) {
            return {x: 0, y: 0, w: 0, h: 0};
        }


        let x, y, w, h;
        y = zone_room.offsetTop;
        h = zone_room.offsetHeight;

        x = zone_start_time.offsetLeft + zone_start_time.offsetWidth / 2;
        w = zone_end_time.offsetLeft + zone_end_time.offsetWidth / 2 - x;

        x -= zone_0.offsetLeft;
        return {x: x, y: y, w: w - 1, h: h};
    }


    const rooms: string[] = [
        'Лекторий IT-5',
        'Лаборатория IT-6',
        'Видеостудия IT-7',
        'Лаборатория IT-8',
        'Лаборатория IT-9',
        'Переговорная IT-10',
        'Шахматный клуб IT-11',
        'ИТ-центр IT-12',
        'ИТ-центр IT-13',
        'Компьютерный класс IT-15',
        'Учебная аудитория IT-16',
        'Компьютерный класс IT-17',
        'IT-18',
        'IT-19',
    ];

    const [dataOfRoom, setDataOfRoom] = useState<{
        roomTitle: string,
        data: {
            x: number,
            w: number,
            data: bookingData,

        }[]
    }[]
    >([]);

    const [times1, setTimes] = useState<string[]>([])
    const [additionalCount, setAdditionalCount] = useState<number>(15);


    const getTimes = (): string[] => {
        let result: string[] = [];
        let dat = new Date();
        dat.setHours(8);
        dat.setMinutes(0);
        console.log('add', additionalCount)
        for (; dat.getHours() < 23;) {
            result.push(dat.getHours().toString().padStart(2, '0') + ':' + dat.getMinutes().toString().padStart(2, '0'));
            dat = new Date(dat.getTime() + 1000 * 60 * additionalCount);
        }
        return result;
    }


    useEffect(() => {
        setTimes(getTimes());
    }, []);

    useEffect(() => {
        setTimes(getTimes());
    }, [additionalCount]);


    useEffect(() => {
        let time_container = document.getElementsByClassName(style.horTimelineTimeContainer) as HTMLCollectionOf<HTMLElement>;
        if (time_container[0] !== null) {
            time_container[0].style.width = `${time_container[0].scrollWidth}px`;
        }


        let elements = document.getElementsByClassName(style.horTimelineRoomRow) as HTMLCollectionOf<HTMLElement>
        let timeCont = document.getElementsByClassName(style.horTimelineTimeContainer) as HTMLCollectionOf<HTMLElement>;
        if (timeCont[0] !== null) {
            for (let i = 0; i < elements.length; i++) {

                elements[i].style.width = `${timeCont[0].scrollWidth}px`;
            }
        }

        let a = [];
        let co;
        co = getCoords('09:30', '10:15', rooms[0])
        a.push({x: co.x, w: co.w, data: {bookingTitle: 'День Тинькофф в МАИ', bookingOwner: 'Иванов Иван Иванович', tags: [{label: 'МЕР', color: '#ffa07a'}]}});
        co = getCoords('10:45', '11:15', rooms[0])
        a.push({x: co.x, w: co.w, data: {bookingTitle: 'Совещание по ДПП', bookingOwner: 'Иванов Иван Иванович', tags: [{label: 'СОВ', color: '#98fb98'}]}});


        let a1 = [];
        co = getCoords('10:30', '11:30', rooms[1])
        a1.push({x: co.x, w: co.w, data: {bookingTitle: 'Компьютерные сети', bookingOwner: 'Филимонов Николай Сергеевич', tags: [{label: 'ЛК', color: '#87ceeb'}]}});

        co = getCoords('09:00', '09:45', rooms[1])
        a1.push({x: co.x, w: co.w, data: {bookingTitle: 'Aerospace Science Week', bookingOwner: 'Погосян Михаил Асланович', tags: [{label: 'CЛ', color: '#CCCCCC'}]}});

        let d = [{
            roomTitle: rooms[0],
            data: a
        },
            {
                roomTitle: rooms[1],
                data: a1
            },

        ];
        setDataOfRoom(d);


    }, [times1]);


    const increase =() =>{

        setAdditionalCount((prevState) => {
            let a = prevState;
            switch (prevState){
                case 1: a = 5; break;
                case 5: a = 15; break;
            }
            console.log('a', a);
            return a;
        })

        // setTimes(getTimes());


    }


    const decrease =() =>{
        setAdditionalCount((prevState) => {
            let a = prevState;
            switch (prevState){
                case 5: a = 1; break;
                case 15: a = 5; break;
            }
            console.log('a', a);

            return a;
        })

        // setTimes(getTimes());

    }

    return (
        <div className={style.horTimelineMain}>
            <div>
                <button onClick={increase}>Больше</button>
                <button onClick={decrease}>Меньше</button>

            </div>
            <HorizontalTimelineTimeCont times={times1}/>
            {rooms.map((room) => {
                return (
                    <div className={style.horTimelineRoomRow}>

                        <div id={'room_' + room} className={style.horTimelineRoomTitle}>
                            {room}
                        </div>
                        <div className={style.horTimelineRoomData}>
                            {dataOfRoom.map((roomD) => {
                                //                                 // return null;
                                if (roomD.roomTitle === room) {
                                    return (roomD.data.map((elementData) => {
                                            return <HorizontalTimelineDataElement
                                                x={elementData.x}
                                                width={elementData.w}
                                                data={elementData.data}
                                            />
                                        })
                                    );
                                }
                                return null;
                            })}
                            {/*<HorizontalTimelineDataElement title={'Первый'} x={0} width={80}/>*/}
                            {/*<HorizontalTimelineDataElement title={'Второй'} x={0} width={80}/>*/}
                        </div>
                    </div>
                );
            })}
        </div>
    );

}