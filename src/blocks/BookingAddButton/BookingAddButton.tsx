import {ButtonElement} from "../../elements/ButtonElement/ButtonElement";
import React from "react";
import styled from "styled-components";


const BookingAddButtonStyle = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  border: none;
  background: none;
`;

export const BookingAddButton = () => {
    return(
        <BookingAddButtonStyle>
            <ButtonElement type='bookingButton' title='Забронировать' />
        </BookingAddButtonStyle>
    );
}