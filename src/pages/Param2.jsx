import { useSearchParams } from "react-router-dom";

const Param2 = () => {
    const [params] = useSearchParams();
    console.log(params.get("q"));
    console.log(params.get("page"));
    return(
        <div className="param2-page page">
            <h2>Param2.jsx</h2>
        </div>
    );
}
export default Param2;