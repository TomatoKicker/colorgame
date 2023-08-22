import { useState } from "react";
import ColorUnit from "./ColorUnit";

const GameBoard = ({incrementWonRound, resetWonRound}) => {

    const colAmount = 4;
    const rowAmount = 4;
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let randomUnit = getRandomInt(rowAmount).toString() + getRandomInt(colAmount).toString()

    const [round, setRound] = useState(0);
    const incrementRound = () => {
        setRound(round + 1);
    };

    const rows = [];
    let cols = [];

    for (let i = 0; i < rowAmount; i++) {
        for (let j = 0; j < colAmount; j++) {
            let id = i.toString() + j.toString()
            let odd = id == randomUnit ? true : false
            cols.push(<ColorUnit color={color} odd={odd} id={id} increment={incrementRound} round={round} wonRound = {incrementWonRound} resetWonRound = {resetWonRound}/>)
        }
        rows.push(
            <div className="flex flex-row">
                {cols}
            </div>
        )
        cols = []
    }

    return (
        <div className="colorGameGameBoard mx-auto">
            {rows}
        </div>
    )
}



export default GameBoard;