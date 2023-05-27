// Props: 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것. 
// Home -> Prop name, age

import Prop from "./pages/Prop";

const Home = () => {
    return(
        <div className="home">
            <h2>Home.jsx</h2>
            <Prop n="name1" age="11" nation="대한민국" />
        </div>
    );
}
export default Home;