import { Link } from "react-router-dom";

export default function HomePage(){
    return(<>
        <h1>Pokémon Cry Quiz</h1>
        <p>Welcome! Press the start button below to play the game!</p>
        <Link to={"/game"}>Start the Quiz!</Link>
    </>
    );
}