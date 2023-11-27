import {ButtonElement, ColorButton} from "../../elements/ButtonElement/ButtonElement";
import {useState} from "react";
import navigation_style from "./NavigationDate.module.css";

const getDateInCorrectFormat = (date: Date): string => {
    const dayOfWeek: string[] = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    const months: string[] = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];

    let dayToday = new Date();
    let dayOfWeekStr :string;
    if (date.getDate() === dayToday.getDate()
        && date.getMonth() === dayToday.getMonth()
        && date.getFullYear() === dayToday.getFullYear()) {

        dayOfWeekStr = 'Сегодня';
    }else{
        dayOfWeekStr = dayOfWeek[date.getDay()];
    }


    return (date.getDate().toString() + ' ' + months[date.getMonth()] + ' (' + dayOfWeekStr + ')');

}

export const NavigationDate = () => {
    const [selectDate, setSelectDate] = useState(new Date());


    return (
        <div className={navigation_style.navigationCont}>
            <ButtonElement type='leftButton' callback={()=>{
                setSelectDate((prevState)=>(
                    new Date(prevState.getTime() - 1000 * 60 * 60 * 24)
                ));
            }}/>
            <span style={{width:'45%', textAlign:'center'}} >{getDateInCorrectFormat(selectDate)}</span>
            <ButtonElement type='rightButton' callback={()=>{
                setSelectDate((prevState)=>(
                    new Date(prevState.getTime() + 1000 * 60 * 60 * 24)
                ));
            }}/>
        </div>
    );

}