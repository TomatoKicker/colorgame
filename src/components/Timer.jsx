const Timer = () => {

    const style = {
        width: 100 + "%",
        background: "var(--tertiary)"
    }

    return (
        <div className="mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-4" style={{width:400}}>
            <div className="h-2.5 rounded-full timer" style={style}></div>
        </div>
    )
}


export default Timer;