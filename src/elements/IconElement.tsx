import {ReactComponent as AddIcon} from '../svg_icon/add.svg'
import {ReactComponent as CloseSvg} from '../svg_icon/close.svg'
import {ReactComponent as PersonSvg} from '../svg_icon/person.svg'
import style from './IconElement.module.css';
import React from "react";



type iconType = 'BookingIcon' | 'CloseIcon' | 'PersonIcon';

interface IconElementData {
    type : iconType;
};

export const IconElement: React.FC<IconElementData>  = ({type}) => {
    let resultIcon;
    switch(type){
        case "BookingIcon":
            resultIcon = <AddIcon className={style.addIcon}/>
            break;
        case "CloseIcon":
            resultIcon = <CloseSvg className={style.closeIcon}/>
            break;
        case "PersonIcon":
            resultIcon = <PersonSvg className={style.personIcon}/>
            break;
    }


    return (
            resultIcon

    );

}