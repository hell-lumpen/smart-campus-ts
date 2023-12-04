import {TagElement} from "../TagElement/TagElement";
import style from './InfoCardElement.module.css'

export const InfoCardElement = () => {

    const title = 'День Тинькофф в МАИ';
    const fio = 'Мария Борисовна Булакина';
    const time_start = '09:00';
    const time_end = '09:00';
    const participants = ['М8О-410Б-20', 'М8О-411Б-20', 'Илья Сергеевич Ирбитский'];
    const audience = 'IT-5';
    const tags = ['Лекция', 'Технология'];
    return (
        <div className={style.InfoCardBack}>
            <div className={style.InfoCard}>
                <div className={style.InfoCardTitle}>
                    {title}
                </div>
                <div className={style.InfoCardAudience}>
                    Аудитория: {audience}
                </div>
                <div className={style.InfoCardAudience}>
                    {fio}
                </div>
                <div className={style.InfoCardAudience}>
                    {time_start} - {time_end}
                </div>
                <div className={style.InfoCardTags}>
                    Участники:
                    {participants.map((element) => {
                        return (<TagElement title={element} color={'#FFB637'}/>);
                        // return(' "' + element + '" ')
                    })}
                </div>

                <div className={style.InfoCardTags}>
                    {tags.map((element) => {
                        return (<TagElement title={element} color={'#FFB637'}/>)
                    })}
                </div>
            </div>
        </div>
    );

}