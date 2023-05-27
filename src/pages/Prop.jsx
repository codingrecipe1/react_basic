import { useState } from "react";

const Prop = (props) => {
    console.log(props);
    const [name, setName] = useState();
    // setName(props.n);
    return(
        <div className="prop-page page">
            <h2>Prop.jsx</h2>
            <p>
                props값: {props.n}, {props.age}, {props.nation}
            </p>
        </div>
    );
}
export default Prop;