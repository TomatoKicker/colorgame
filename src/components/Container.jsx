import GameBoard from "./GameBoard";
import Header from "./Header";
import ScoreBoard from "./ScoreBoard";
import Timer from "./Timer";

import { useState } from "react";

const Container = () => {

    const resetRound = () => {
        setRound(0)
    }

    const [round, setRound] = useState(0);
    const incrementRound = () => {
        setRound(round + 1);
    };
    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-row">
                <Header />
            </div>
            <div className="flex flex-row">
                <ScoreBoard name="John Doe" score="12" currentScore={round} />
            </div>
{/*             <div className="flex flex-row">
                <Timer />
            </div> */}
            <div className="flex flex-row">
                <GameBoard incrementRound={incrementRound} resetRound={resetRound} round={round} />
            </div>
        </div>
    )
}

export default Container;