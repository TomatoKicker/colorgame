const GameBoard = () => {

    const colAmount = 4;
    const rowAmount = 4;

    console.log(colAmount)
    console.log(rowAmount)
    
    const row = [];

    for(let i = 0; i < rowAmount; i++){
        row.push(<p className="basis-1/4">row</p>)
    }

    return (
        <div className="colorGameGameBoard mx-auto">
            <div className="flex flex-row">
            {row}
            </div>
        </div>
    )
}

export default GameBoard;