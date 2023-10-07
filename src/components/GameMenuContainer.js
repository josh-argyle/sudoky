import styles from './stylesheets/GameMenuContainer.module.css'

function GameMenuContainer ( {submitBoard, restartBoard, startNewGame}) {

    // These click handlers get passed to the GameBoard component to activate their respective functions.
    const handleClickRestart = () => {
        restartBoard();
    }
    const handleClickNewGame = () => {
        startNewGame();
    }
    const handleClickSubmit = () => {
        submitBoard();
    }

    return (
        <div className={styles.container}>
            <div className={styles.gameMenu}> Menu</div>
            <div className={styles.menuButton} onClick={handleClickRestart}>
                <div>Restart</div>
            </div>
            <div className={styles.menuButton} onClick={handleClickNewGame}>
                <div>New</div>
            </div>
            <div className={styles.menuButton} onClick={handleClickSubmit}>
                <div>Submit</div>
            </div>
        </div>

    )

}

export default GameMenuContainer;