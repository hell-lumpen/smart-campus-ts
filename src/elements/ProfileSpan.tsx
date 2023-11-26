import {IconElement} from "./IconElement/IconElement";
import styled from "styled-components";


const ProfileSpanText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:flex-start;
  font-size : 14px;
`;

export const ProfileSpan:React.FC<{fio:string}> = ({fio}) => {

    return (
        <ProfileSpanText>
            <IconElement type='PersonIcon'/>
            <div style={{height:'max-content'}}>{fio}</div>
        </ProfileSpanText>
    );
}