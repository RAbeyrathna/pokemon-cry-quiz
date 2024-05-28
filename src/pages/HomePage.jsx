import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useBaseTotalRoundsGlobalData } from "../contexts/baseTotalRoundsContext";

export default function HomePage(){
     // Initial Rounds from form
     let [baseQuizRounds, setQuizRounds] = useState(5);

     // Initial rounds from global state
     let baseTotalRoundsGlobal = useBaseTotalRoundsGlobalData();
     let setTotalRoundsGlobal = useBaseTotalRoundsGlobalDispatch();
 
     useEffect(() => {
         setQuizRounds(baseTotalRoundsGlobal);
     }, [baseTotalRoundsGlobal]);

    return(<>
        <h1>Pokémon Cry Quiz</h1>
        <p>Welcome to the Pokémon Cry Quiz! Adjust the setings below then press the button to begin!</p>
        {/* Choose amount of rounds */}

        {/* Start Quiz */}
        <Link to={"/game"}>Start the Quiz!</Link>
    </>
    );
}