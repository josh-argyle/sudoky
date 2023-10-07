import styles from './stylesheets/GameBoard.module.css'
import BoardPanel from "./BoardPanel";

function GameBoard ( {boardState, setBoardState} ) {

    // Updates the current board state using the users input.
    const handleSetNewRow = (newNumber, cellIndex, rowIndex) => {
        const newBoardState = boardState;
        newBoardState[rowIndex][cellIndex] = newNumber;
        setBoardState(newBoardState);
        console.log("GameBoard\tindex: " + cellIndex + " of row: " + rowIndex + " changed to: " + newNumber);
        console.log(boardState[rowIndex]);

    }

    // Each 'row' is actually a panel. It is a row of the 2d array.
    return (
        <div className={styles.gameBoard}>
            {boardState.map((row, rowIndex) => (
                <BoardPanel
                    boardState={boardState}
                    panelState={boardState[rowIndex]}
                    panelIndex={rowIndex}
                    key={rowIndex}
                    rowData={row}
                    passValue={handleSetNewRow}
                />
            ))}
        </div>
    )
}

export default GameBoard;