const ScoreBoard = ({name, score}) => {

    return (
        <div className="colorGameScoreBoard mx-auto">
            <div className="flex flex-row">
                <h2 class="pt-10 px-5 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl mx-auto">
                    Score Board
                </h2>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 text-center font-bold">
                    {name}
                </div>
                <div className="basis-1/2 text-center font-bold">
                    {score}
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;