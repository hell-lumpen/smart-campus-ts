import navigation_style from './NavigationPanel.module.css'
import {ButtonElement, ColorButton} from "../../elements/ButtonElement";

export const NavigationPanel = () => {


    return (
        <div className={navigation_style.NavigationContainer}>
            <ButtonElement title='Профиль' color={ColorButton.SimpleButton}/>
            <ButtonElement title='Бронирование' color={ColorButton.SimpleButton}/>
            <ButtonElement title='Инвентаризация' color={ColorButton.SimpleButton}/>
            <ButtonElement title='Администрирование' color={ColorButton.SimpleButton}/>
        </div>

    );

}