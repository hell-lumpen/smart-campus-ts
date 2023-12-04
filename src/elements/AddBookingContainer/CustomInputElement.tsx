import './CustomInputElement.css'
import {TagElement} from "../TagElement/TagElement";
import {useEffect, useState} from "react";
import {log} from "util";

interface CustomInputData {
    titleDiv : string;
    titles: string[];
}


export const CustomInputElement: React.FC<CustomInputData> = (props) => {
    const [inputTags, setInputTags] = useState<string[]>([]);
    const [tagVariants, setTagVariants] = useState<string[]>([]);

    useEffect(() => {
        setTagVariants(props.titles);
        // setInputTags(['Лекция'])
    }, []);


    const inputUpdate = (element: React.FormEvent<HTMLInputElement>)=>{
        let elementReact = element.target as HTMLInputElement;
        if (tagVariants.includes(elementReact.value) && !inputTags.includes(elementReact.value)){
            console.log(elementReact.value)
            let str = elementReact.value;

            setInputTags(prevState => [...prevState, str])
            elementReact.value = "";
        }else{
            hideFromInputTags(elementReact.value);
        }
    }

    const removeTagFromTagVariants = (title:string) => {

        console.log('delete ', title)
        setInputTags(prevState => {
            let a = prevState;
            console.log(a.indexOf(title))
            console.log('array 1', a);

            a.splice(a.indexOf(title), 1);
            console.log('array 2', a);
            return [...a];
        })
    }

    const hideFromInputTags = (title:string) =>{
        let elements = document.getElementsByClassName('input-participant-option');
        let str;
        let element;
        for (let i = 0; i < elements.length; i++){
            str = elements[i].textContent;

            if (str){
                element = elements[i] as HTMLOptionElement;

                if (str.includes(title)){
                    element.style.display = 'block'
                }else{
                    element.style.display = 'none'
                }
            }
        }
    }

    const showDataList = () => {
        console.log('show')
        let dataList = document.getElementById('character');
        if (dataList) dataList.style.display = 'block';
    }

    const hideDataList = () => {
        console.log('hide')

        let dataList = document.getElementById('character');
        if (dataList) dataList.style.display = '';
    }

    const setInputFromOption = (element: React.FormEvent<HTMLOptionElement>) => {
        let elementReact = element.target as HTMLOptionElement;
        let inputElement = document.getElementById('input1');
        if (inputElement){
            elementReact.value = "";
            if (!inputTags.includes(elementReact.text))
                setInputTags(prevState => [...prevState, elementReact.text])

            //
            // let dataList = document.getElementById('character');
            // if (dataList) {
            //     dataList.style.display = 'none';
            // }

        }else{
            console.log('empty input')
        }
    }


    let a =inputTags.filter((e) => tagVariants.indexOf(e) === -1);
    inputTags.filter((e) => tagVariants.indexOf(e) === -1).map((value)=>{

    });

    return (
        <div className={'custom-input-cont'}>

            <input onFocus={showDataList} onBlur={hideDataList} onChange={inputUpdate} className='custom-input-input' role="combobox" list="" id="input1"/>


            <datalist className='custom-input-dataList' id="character">
                {
                    tagVariants.filter((e) => !inputTags.includes(e)).map((value)=>{
                        return (<option className='input-participant-option' onClick={setInputFromOption} value={value}>{value}</option>);

                    })
                }

            </datalist>


            <div  className='custom-input-tags'>

                {
                    inputTags.map((value)=>{
                        return (
                            <TagElement title={value} color={'aquamarine'} callback={removeTagFromTagVariants}/>

                        )
                    })



                }
            </div>
        </div>

    );
}