const ScoreBoard = ({name, score, currentScore}) => {
    return (
        <div className="colorGameScoreBoard mx-auto">
            <div className="flex flex-row">
                <h2 className="pt-10 px-5 mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl mx-auto">
                    Score Board
                </h2>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 text-center font-bold">
                    <p>
                    {name}
                    </p>
                </div>
                <div className="basis-1/2 text-center font-bold">
                    <p>
                    {score}
                    </p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 text-center font-bold">
                    <p>
                    You
                    </p>
                </div>
                <div className="basis-1/2 text-center font-bold">
                    <p>
                    {currentScore}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;