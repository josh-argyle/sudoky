import styles from './stylesheets/GameBoardContainer.module.css'
import GameBoard from "./GameBoard";

function GameBoardContainer ( {boardState, passNewBoardState}) {

    const setNewBoardState = (newBoard) => {
        passNewBoardState(newBoard);
    }

    return (
        <div className={styles.gameBoardContainer}>
            <GameBoard boardState={boardState} setBoardState={setNewBoardState}/>
        </div>
    )
}

export default GameBoardContainer;