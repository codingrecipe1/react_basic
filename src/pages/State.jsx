// useState(): react hooks

import { useState } from "react";

const State = () => {
    const [param1, setParam1] = useState("초기값");
    const [param2, setParam2] = useState("");
    const func1 = () => {
        setParam1("안녕하세요");
    }
    const func2 = () => {
        setParam1("");
    }
    const textInput = (e) => {
        // console.log(e);
        console.log(e.target.value);
        console.log(e.target.name);
        const { name, value } = e.target;
        console.log(name, value);
        setParam2(value);
    }
    return(
        <div className="state-page page">
            <h2>State.jsx</h2>
            <p>{param1}</p>
            <button onClick={func1}>버튼</button>
            <button onClick={func2}>초기화</button>
            <input type="text" onChange={textInput} name="param2" />
            <p>입력값: {param2}</p>
        </div>
    );
}
export default State;