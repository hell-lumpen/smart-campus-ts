import styled from "styled-components";
import timeline_style from "./TimelineElement.module.css"
import {useEffect, useState} from "react";
import {log} from "util";


const Timeline = styled.div<{ coordStart: number, coordEnd: number }>`
  width: 85%;
  margin-left: 15%;

  min-height: 15px;

  background: #55e9bc;
  border-top: #49C7A0 3px solid;
  border-bottom: #49C7A0 3px solid;

  opacity: 40%;
  position: absolute;
  top: ${props => props.coordStart - 1}px;
  height: ${props => props.coordEnd - props.coordStart - 1}px;
`;

const times: string[] = [
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
]

const getBookingTimeZone = (time_start: Date, time_end: Date) => {
    let coord_start, coord_end;
    const h1 = time_start.getHours().toString();
    const h2 = time_end.getHours().toString();
    let div_time_zone_start = document.getElementById('time_zone_' + times.indexOf(h1 + ':00'));
    let div_time_zone_end = document.getElementById('time_zone_' + times.indexOf(h2 + ':00'));
    if (div_time_zone_end === null || div_time_zone_start === null) {
        return null;
    }

    coord_start = div_time_zone_start.offsetTop;
    coord_end = div_time_zone_end.offsetTop;

    let height = div_time_zone_start.offsetHeight;
    coord_start += height * time_start.getMinutes() / 60;

    height = div_time_zone_end.offsetHeight;
    coord_end += height * time_end.getMinutes() / 60;

    return {start: coord_start, end: coord_end};
}

export const TimelineElement = () => {
    const [timeCoords, setCoord] = useState<{ start: number, end: number }[]>([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {


        let date1 = new Date(2014, 11, 31, 9, 0, 0);
        let date2 = new Date(2014, 11, 31, 10, 30, 0);
        const coords = getBookingTimeZone(date1, date2);
        if (coords === null)
            return;

        let ind = timeCoords.findIndex((element) => element.start === coords.start && element.end === coords.end)
        if (ind === -1)
            setCoord((prevState) => [...prevState, coords]);


        date1 = new Date(2014, 11, 31, 12, 15, 0);
        date2 = new Date(2014, 11, 31, 13, 30, 0);
        const coords1 = getBookingTimeZone(date1, date2);
        if (coords1 === null)
            return;

        ind = timeCoords.findIndex((element) => element.start === coords1.start && element.end === coords1.end)
        if (ind === -1)
            setCoord((prevState) => [...prevState, coords1]);


        date1 = new Date(2014, 11, 31, 16, 30, 0);
        date2 = new Date(2014, 11, 31, 18, 0, 0);
        const coords2 = getBookingTimeZone(date1, date2);
        if (coords2 === null)
            return;

        ind = timeCoords.findIndex((element) => element.start === coords2.start && element.end === coords2.end)
        if (ind === -1)
            setCoord((prevState) => [...prevState, coords2]);

        // setStartCoord(coords[0]);
        // setEndCoord(coords[1]);


        const updateCurrentTime = () => {
            setCurrentTime(new Date());
            findCoordsForCurrentTime();

        };

        // Устанавливаем интервал для вызова функции каждую секунду
        const intervalId = setInterval(updateCurrentTime, 1000);
        findCoordsForCurrentTime();

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);


    const findCoordsForCurrentTime = () => {
        let curTime = new Date();
        const coords2 = getBookingTimeZone(curTime, curTime);
        if (coords2 !== null && document.documentElement.style.getPropertyValue("--pos_coor_y") !== coords2.start + 'px') {
            document.documentElement.style.setProperty("--pos_coor_y", coords2.start + 'px');
            console.log('update');
        }
    }

    return (
        <div className={timeline_style.mainTimelineWidget}>
            {
                times.map((element, index) => {
                    return (
                        <div id={'time_zone_' + index} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            width: '100%',
                            position: 'relative',

                            // background: 'red'
                        }}>
                            <span className={timeline_style.spanElement}><b>{element}</b></span>
                            <div id={index.toString()} className={timeline_style.timelineTimeZone}></div>
                        </div>
                    );
                })
            }
            {
                timeCoords.map((element) => {
                    return (<Timeline coordStart={element.start} coordEnd={element.end}/>);
                })

            }
            <div className={timeline_style.currentTimeContainer}>
                <div style={{
                    width: '85%',
                    height: '2px',
                    background: 'red',
                }}/>
                <b style={{
                    lineHeight : '20px',
                }}>{currentTime.getHours() + ':' + currentTime.getMinutes()}</b>
            </div>


        </div>
    );

}