const ColorUnit = ({ color, odd, id, increment, round, showModal, score }) => {

    function lightenHexColor(hexColor, amount) {
        // Entferne das '#'-Zeichen, wenn es vorhanden ist
        hexColor = hexColor.replace('#', '');

        // Zerlege die Hex-Farbe in R, G und B Komponenten
        const r = parseInt(hexColor.substring(0, 2), 16);
        const g = parseInt(hexColor.substring(2, 4), 16);
        const b = parseInt(hexColor.substring(4, 6), 16);

        // Erhöhe die R, G und B Komponenten um den angegebenen Betrag
        const newR = Math.min(r + amount, 255);
        const newG = Math.min(g + amount, 255);
        const newB = Math.min(b + amount, 255);

        // Konvertiere die neuen RGB-Werte zurück in eine Hex-Farbe
        const newHexColor = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;

        return newHexColor;
    }

    let lighten = 30 - round * 1;
    const style = {
        backgroundColor: odd === "1" ? lightenHexColor(color, lighten) : color
    }

    const onClickHandler = () => {
        if (odd === "0") {
            showModal()
            return
        }
         increment() 
    }


    return (
        <button onClick={onClickHandler}>
            <div className="rounded-full m-5 colorUnit" style={style} odd={odd} key={ id }>
            </div>
        </button>
    )
}

export default ColorUnit;