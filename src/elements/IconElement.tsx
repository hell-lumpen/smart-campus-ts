import {ReactComponent as AddIcon} from '../svg_icon/add.svg'
import {ReactComponent as CloseSvg} from '../svg_icon/close.svg'
import style from './IconElement.module.css';
import React from "react";



type iconType = 'BookingIcon' | 'CloseIcon';

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
    }


    return (
            resultIcon

    );

}