import React, {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [inputValue,setInputValue] = useState()
    const onClickChange = (num) =>  {
        let result = count + num;
        if (result < 0) {
            setCount(result=0)
        } else {
            setCount(result)
        }
        setCount(result)
    }

    const onChange = (ev) => {
        setInputValue(+ev.target.value)
        console.log(inputValue)
    }
    const onSubmit = (ev) => {
        let result = count+inputValue;
        if (result < 0) {
            setCount(result=0)
        } else {
            setCount(result)
        }
        setCount(result)
        setCount(result)
    }
    return (
        <div className={'wrap'}>
            <button onClick={()=>{onClickChange(1)}}>1</button>
            <button onClick={()=>{onClickChange(-1)}}>-1</button>
            <button onClick={()=>{onClickChange(100)}}>100</button>
            <button onClick={()=>{onClickChange(-100)}}>-100</button>
            <button onClick={()=>{onClickChange(-count)}}>Reset</button>
            <form action="" id={'form'} name={'form'}>
                <input type="number" name={'numbers'} onChange={onChange} value={inputValue}/>
            </form>
            <button onClick={onSubmit}>Submit</button>
            <div>Counter value: {count}</div>
            <div></div>
        </div>
    )



}