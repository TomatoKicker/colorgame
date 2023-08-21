import Header from "./Header";
import ScoreHolder from "./ScoreHolder";

const Container = () => {

    return (
        <div className="container mx-auto">
            <div className="flex flex-row">
                <Header/>
            </div>
            <div className="flex flex-row">
                <ScoreHolder/>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </div>
                <div className="basis-1/2">
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Container;