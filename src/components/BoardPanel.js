import styles from './stylesheets/BoardPanel.module.css'
import PanelSquare from "./PanelSquare";
import {useState} from "react";

// A panel which holds 9 squares.
function BoardPanel ( {panelState, passValue, panelIndex, boardState} ) {

    const[currentValue] = useState(panelState);


    const passNewValue = (newNumber, cellIndex) => {
        passValue(newNumber, cellIndex, panelIndex);
        console.log("BoardPanel\tindex: " + cellIndex + " changed to: " + newNumber);
    }

    return (
        <div className={styles.boardPanel}>
            {panelState.map((cell, cellIndex) => (
                <PanelSquare
                    boardState={boardState}
                    panelStateValues={currentValue}
                    cellValue={panelState[cellIndex]}
                    panelIndex={panelIndex}
                    cellIndex={cellIndex}
                    key={cellIndex}
                    value={cell}
                    passNewValue={passNewValue}
                />
            ))}
        </div>
    )
}

export default BoardPanel;