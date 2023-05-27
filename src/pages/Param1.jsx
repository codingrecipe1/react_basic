import { useParams } from "react-router-dom";

const Param1 = () => {
    const { id } = useParams();
    console.log(id);
    return(
        <div className="param1-page page">
            <h2>Param1.jsx</h2>
            <p>요청 id: {id}</p>
        </div>
    );
}
export default Param1;