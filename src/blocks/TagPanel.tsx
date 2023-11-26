import {TagElement} from "../elements/TagElement/TagElement";
import React, {ReactElement} from "react";


export const TagPanel = (data: { tags: string[], returnTagFunc?: (returnTags: string)=>void }) => {
    if (data.returnTagFunc !== undefined) {
        return (
            <div>
                {data.tags.map((tag, index) => (<TagElement title={tag} color={'red'} callback={data.returnTagFunc}/>))}
            </div>
        );

    } else {
        return (
            <div>
                {data.tags.map((tag, index) => (<TagElement title={tag} color={'red'}/>))}
            </div>
        );
    }

}