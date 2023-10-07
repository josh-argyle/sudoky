import styles from './stylesheets/GameContainer.module.css'
import GameMenuContainer from "./GameMenuContainer";
import GameBoardContainer from "./GameBoardContainer";
import {useEffect, useState} from "react";
import SubmissionResultModal from "./SubmissionResultModal";
function GameContainer () {

    // Set up the initial game.
    useEffect(() => {
        let board = deepCopy(getNewBoard())
        board = removeValues(board);

        setBoardState(deepCopy(board));
        setOriginalBoardState(deepCopy(board));
    }, []);

    // Checks each individual panel.
    function checkAllPanels() {
        let flag = true;
        // Checks if each panel contains all the numbers
        for (let i = 0; i < 9; i++) {
            let string = "";
            for (let k = 1; k <= 9; k++) {
                if (!boardState[i].includes(k)) {
                    string = string + " " + k;

                    flag = false;
                }
            }
            console.log("Panel " + i + " does not contain " + string + "!");
        }
        return flag;
    }

    // Check all rows.
    function checkAllRows() {
        let flag = true;
        // For panels 1, 4 and 7:
        for (let i = 1; i < 8; i+=3) {

            // Get each row for the panel plus the panel either side of it ( ie for panel 1, get 0 and 2 as well)
            // Add the values for the current row to the temp array.

            // For each row in the 3 panels
            for (let n = 1; n < 8; n+=3) {
                let tempArray = [];

                // middle panel
                tempArray.push(boardState[i][n-1])
                tempArray.push(boardState[i][n])
                tempArray.push(boardState[i][n+1])
                // left panel
                tempArray.push(boardState[i - 1][n-1])
                tempArray.push(boardState[i - 1][n])
                tempArray.push(boardState[i - 1][n+1])
                // right panel
                tempArray.push(boardState[i + 1][n-1])
                tempArray.push(boardState[i + 1][n])
                tempArray.push(boardState[i + 1][n+1])

                let doesNotArray = [];
                for (let k = 1; k <= 9; k++) {

                    if (!tempArray.includes(k)) {
                        doesNotArray.push(k);
                        flag = false;
                    }
                }
                let string = "";
                doesNotArray.forEach(r => string += r + " ");
                if (i === 1) {
                    if (n === 1) console.log("Panel row 1 : row 1 does not contain " + string);
                    if (n === 4) console.log("Panel row 1 : row 2 does not contain " + string);
                    if (n === 7) console.log("Panel row 1 : row 3 does not contain " + string);

                }
                else if (i === 4) {
                    if (n === 1) console.log("Panel row 2 : row 1 does not contain " + string);
                    if (n === 4) console.log("Panel row 2 : row 2 does not contain " + string);
                    if (n === 7) console.log("Panel row 2 : row 3 does not contain " + string);
                }
                else if (i === 7) {
                    if (n === 1) console.log("Panel row 3 : row 1 does not contain " + string);
                    if (n === 4) console.log("Panel row 3 : row 2 does not contain " + string);
                    if (n === 7) console.log("Panel row 3 : row 3 does not contain " + string);
                }
            }
        }

        return flag;
    }

    // Check all columns.
    function checkAllColumns() {
        let flag = true;
        // For each set of panels by center of column ( 3, 4 and 5 )
        for (let i = 3; i < 6; i++) {

            // For each column in those panels, with one above and below included
            for (let n = 0; n < 3; n++) {
                let tempArray = [];

                // Top panel
                tempArray.push(boardState[i - 3][n])
                tempArray.push(boardState[i - 3][3 + n])
                tempArray.push(boardState[i - 3][6 + n])

                // Middle panel
                tempArray.push(boardState[i][n])
                tempArray.push(boardState[i][3 + n])
                tempArray.push(boardState[i][6 + n])

                // Bottom panel
                tempArray.push(boardState[i + 3][n])
                tempArray.push(boardState[i + 3][3 + n])
                tempArray.push(boardState[i + 3][6 + n])

                let doesNotArray = [];
                for (let k = 1; k <= 9; k++) {

                    if (!tempArray.includes(k)) {
                        doesNotArray.push(k);
                        flag = false;
                    }

                }
                let string = "";
                doesNotArray.forEach(r => string += r + " ");
                if (i === 3) {
                    if (n === 0) console.log("Panel column 1 : column 1 does not contain " + string);
                    if (n === 1) console.log("Panel column 1 : column 2 does not contain " + string);
                    if (n === 2) console.log("Panel column 1 : column 3 does not contain " + string);

                } else if (i === 4) {
                    if (n === 0) console.log("Panel column 2 : column 1 does not contain " + string);
                    if (n === 1) console.log("Panel column 2 : column 2 does not contain " + string);
                    if (n === 2) console.log("Panel column 2 : column 3 does not contain " + string);
                } else if (i === 5) {
                    if (n === 0) console.log("Panel column 3 : column 1 does not contain " + string);
                    if (n === 1) console.log("Panel column 3 : column 2 does not contain " + string);
                    if (n === 2) console.log("Panel column 3 : column 3 does not contain " + string)
                }

            }
        }
        return flag;
    }

    // Runs each of the checks to see if the solution is complete.
    const checkSolution = () => {
        let flag = checkAllPanels();
        if (flag) flag = checkAllRows();
        if (flag) flag = checkAllColumns();
        return flag;
    }

    // Current board state.
    const [boardState, setBoardState] = useState( [
        [],
        [],
        [],

        [],
        [],
        [],

        [],
        [],
        []

    ]);

    // Board original state.
    const [originalBoardState, setOriginalBoardState] = useState( [
        [],
        [],
        [],

        [],
        [],
        [],

        [],
        [],
        []

    ]);

    // Board solution.
    const [solutionBoardState, setSolutionBoardState] = useState( [
        [5, 3, 4, 6, 7, 2, 1, 9, 8],
        [6, 7, 8, 1, 9, 5, 3, 4, 2],
        [9, 1, 2, 3, 4, 8, 5, 6, 7],

        [8, 5, 9, 4, 2, 6, 7, 1, 3],
        [7, 6, 1, 8, 5, 3, 9, 2, 4],
        [4, 2, 3, 7, 9, 1, 8, 5, 6],

        [9, 6, 1, 2, 8, 7, 3, 4, 5],
        [5, 3, 7, 4, 1, 9, 2, 8, 6],
        [2, 8, 4, 6, 3, 5, 1, 7, 9]

    ]);

    function getNewBoard() {
        return [...solutionBoardState];
    }

    const handleSubmitBoard = () => {
        const flag = checkSolution();
        if (flag) console.log("Solution is correct!")
        else console.log("Solution is incorrect!")

        if (flag) setSubmissionResult("Correct!");
        else setSubmissionResult("Incorrect!");
        handleOpenModal();
    }

    const handleSetNewBoardState = (newBoard) => {
        setBoardState([...newBoard]);
        console.log("Setting new board state.");
    }

    // Generate a random integer between min (inclusive) and max (inclusive)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Makes a deep copy of a 2D array prop. Stops the sub arrays being passed by reference.
    const deepCopy = (obj) => {
        return JSON.parse(JSON.stringify(obj));
    };

    // Resets the current board to its original state.
    const handleRestartBoard = () => {
        const newBoardState = deepCopy(originalBoardState);
        setBoardState(newBoardState);
        console.log("Resetting board state.");
    }

    // Randomly removes values from the entire 2D array.
    function removeValues(inputArray) {
        // For each row in the array.
        for (let i = 0; i < 9; i++) {
            // Get a number between 2 and 5 to leave.
            let numToRemove = getRandomInt(4, 7);
            // While we havnt removed enough numbers.
            while (numToRemove > 0) {
                // Get a random array position.
                let arrayPos = getRandomInt(0, 8);
                // If it isnt already 0, make it so.
                if (inputArray[i][arrayPos] !== 0) {
                    inputArray[i][arrayPos] = 0;
                    numToRemove--;
                }
            }
        }
        return inputArray;
    }

    // Creates a new game board.
    const handleStartNewGame = () => {
        let board = deepCopy(getNewBoard())
        board = removeValues(board);

        setBoardState(deepCopy(board));
        setOriginalBoardState(deepCopy(board));

    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submissionResult, setSubmissionResult] = useState("Incorrect!");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className={styles.gameContainer}>
            {/*<div>game menu</div>*/}
            {/*<div>game board</div>*/}
            <GameMenuContainer submitBoard={handleSubmitBoard} restartBoard={handleRestartBoard} startNewGame={handleStartNewGame}/>
            <GameBoardContainer boardState={boardState} passNewBoardState={handleSetNewBoardState}/>
            <SubmissionResultModal isOpen={isModalOpen} onRequestClose={handleCloseModal} submissionResult={submissionResult}/>
        </div>
    )

}

export default GameContainer;