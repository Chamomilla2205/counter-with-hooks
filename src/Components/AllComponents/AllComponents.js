import React, {useState} from "react";
import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";
import Result from "../Result/Result";

export default function App() {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState()
    const array = [1, -1, 100, -100, 500]

    const onClickChange = (num) => {
        let result = count + num;

        if (result < 0) {
            setCount(result = 0)
        } else {
            setCount(result)
        }
        // todo у цьому методы помилка знайди
        setCount(result)
    }

    const onChange = (inputValue) => {
        setInputValue(inputValue)
    }
    const onSubmit = () => {
        let result = count + +inputValue;
        if (result < 0) {
            setCount(result = 0)
        } else {
            setCount(result)
        }
        // todo у цьому методы помилка знайди

        setCount(result)
        setCount(result)
    }

    return (
        <div className={'wrap'}>
            <Buttons onClickChange={onClickChange} count={count} array={array}/>
            {/*todo всі конпки мають бути в Buttons*/}
            <button onClick={() => onClickChange(-count)}>RESET</button>
            {/*todo*/}
            {/*todo це має бути едина компонента*/}
            <Input onChange={onChange} value={inputValue}/>
            <button onClick={onSubmit}>Submit</button>
            {/*todo*/}
            <Result count={count}/>
        </div>
    )


}
