// Props: 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것. 
// Home -> Prop name, age

import { Link } from "react-router-dom";
import Prop from "./pages/Prop";

const Home = () => {
    return(
        <div className="home">
            <h2>Home.jsx</h2>
            {/* <Prop n="name1" age="11" nation="대한민국" /> */}
            {/* /board/110, /board?page=10, /board?q=a */}
            <Link to={
                {
                    pathname: "/param/20"
                }
            }>param전송(path variable)</Link>
        </div>
    );
}
export default Home;