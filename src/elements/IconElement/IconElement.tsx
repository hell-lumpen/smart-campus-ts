import {ReactComponent as AddIcon} from '../../svg_icon/add.svg'
import {ReactComponent as CloseSvg} from '../../svg_icon/close.svg'
import {ReactComponent as PersonSvg} from '../../svg_icon/person.svg'
import {ReactComponent as NavigateBeforeSvg} from '../../svg_icon/navigate_before.svg'
import {ReactComponent as NavigateAfterSvg} from '../../svg_icon/navigate_next.svg'
import style from './IconElement.module.css';
import React from "react";



type iconType = 'BookingIcon' | 'CloseIcon' | 'PersonIcon' | 'NavigateBefore' | 'NavigateAfter';

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
        case "NavigateBefore":
            resultIcon = <NavigateBeforeSvg className={style.navigateIcon}/>
            break;
        case "NavigateAfter":
            resultIcon = <NavigateAfterSvg className={style.navigateIcon}/>
            break;
        case "PersonIcon":
            resultIcon = <PersonSvg className={style.personIcon}/>
            break;
    }


    return (
            resultIcon

    );

}