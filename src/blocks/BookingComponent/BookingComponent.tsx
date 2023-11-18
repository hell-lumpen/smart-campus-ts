import React from "react";
import {TagElement} from "../../elements/TagElement/TagElement";


type BookingComponentData  = {
    tag : string;
    tagColor : string;
    status : string;
    description : string
    owner : string;
    startTime: string
    endTime: string
}



export const BookingComponent = (
    data : BookingComponentData
) => {

    const tagComponent = <TagElement title={tag} color={tagColor}/>;

  return (
      <div>
          {tagComponent}
          {status}
          {description}
          {owner}
          {startTime}
          {endTime}
      </div>
  );
}

