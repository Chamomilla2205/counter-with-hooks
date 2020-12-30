import React, {useState} from "react";
import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";
import Result from "../Result/Result";

export default function App() {

    const [count, setCount] = useState(0);
    const [inputValue,setInputValue] = useState()
    const array = [1,-1,100,-100,500]

    const onClickChange = (num) =>  {
        let result = count + num;
        if (result < 0) {
            setCount(result=0)
        } else {
            setCount(result)
        }
        setCount(result)
    }

    const onChange = (inputValue) => {
        setInputValue(inputValue)
    }
    const onSubmit = () => {
        let result = count+ +inputValue;
        if (result < 0) {
            setCount(result=0)
        } else {
            setCount(result)
        }
        // не многовато сетКаунтов?
        // setCount(result)
        // setCount(result)
    }

    return (
        <div className={'wrap'}>
            <Buttons onClickChange = {onClickChange} count = {count} array = {array}/>
            <button onClick={() => onClickChange(-count)}>RESET</button>
            <Input onChange={onChange} value={inputValue}/>
            <button onClick={onSubmit}>Submit</button>
            <Result count = {count}/>
            <div>Counter value: {count}</div>
            {/*лишний тег под*/}
            <div></div>
        </div>
    )



}
