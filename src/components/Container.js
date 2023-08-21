import GameBoard from "./GameBoard";
import Header from "./Header";
import ScoreBoard from "./ScoreBoard";

const Container = () => {

    return (
        <div className="container mx-auto glass mt-10">
            <div className="flex flex-row">
                <Header/>
            </div>
            <div className="flex flex-row">
                <ScoreBoard name="John Doe" score="12"/>
            </div>
            <div className="flex flex-row">
                <GameBoard/>
            </div>
        </div>
    )
}

export default Container;