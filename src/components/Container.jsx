import GameBoard from "./GameBoard";
import Header from "./Header";
import ScoreBoard from "./ScoreBoard";

import { useState } from "react";

const Container = () => {

    const [wonRound, setWonRound] = useState(0);

    const incrementWonRound = () => {
        setWonRound(wonRound + 1);
     };
    const resetWonRound = () => {
        setWonRound(0)
    }
    return (
        <div className="container mx-auto glass mt-10">
            <div className="flex flex-row">
                <Header/>
            </div>
            <div className="flex flex-row">
                <ScoreBoard name="John Doe" score="12" currentScore = {wonRound}/>
            </div>
            <div className="flex flex-row">
                <GameBoard incrementWonRound = {incrementWonRound} resetWonRound={resetWonRound}/>
            </div>
        </div>
    )
}

export default Container;