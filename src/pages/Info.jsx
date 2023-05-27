// javascript object 출력 

const nation = {
    name: "대한민국",
    population: 51400000,
    capital: "서울",
    language: "한국어"
}

const nations = [{
    name: "대한민국",
    population: 51408155,
    capital: "서울",
    language: "한국어"
},
{
    name: "프랑스",
    population: 67810000,
    capital: "파리",
    language: "프랑스어"
},
{
    name: "호주",
    population: 25690000,
    capital: "캔버라",
    language: "영어"
},
{
    name: "미국",
    population: 331900000,
    capital: "워싱턴DC",
    language: "영어"
}]

const Info = () => {

    return (
        <div className="info-page page">
            <h2>Info.jsx</h2>
            <p>{nation.name}, {nation.population}, {nation.capital}, {nation.language}</p>
            {nations.map(n => (
                <p>{n.name}, {n.population}, {n.capital}, {n.language}</p>
            ))}
        </div>
    );
}
export default Info;