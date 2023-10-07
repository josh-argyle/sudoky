import styles from './stylesheets/PanelSquare.module.css'
import {useState} from "react";
import NumberSelectModal from "./NumberSelectModal";

// One of the main squares which holds one of the 81 numbers.
function PanelSquare ( {cellIndex, passNewValue, panelStateValues, boardState, panelIndex} ) {


    // Only display a value if there is one in the grid, otherwise display an empty square.
    const getValue = (inputValue) => {
        if (inputValue === 0) {
            return "";
        } else {
            return inputValue;
        }
    }

    const handleSetValue = (value) => {
        passNewValue(value, cellIndex);
        console.log("PanelSquare\tindex: " + cellIndex + " changed to: " + value);
        // setCurrentValue(value);
        handleCloseModal();
    }

    // Track the modals state.
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Set the modal to open.
    const handleOpenModal = () => {
        setIsModalOpen(true);
        console.log("opn - modal is: " + isModalOpen);
        // console.log("cell value: " + getValue(cellValue));
        console.log("cell value: " + panelStateValues[cellIndex]);
    }
    // Set the modal to closed.
    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log("cld - modal is: " + isModalOpen);
        // console.log(getValue(cellValue));
        console.log("cell value: " + panelStateValues[cellIndex]);
    }

    return (
        <div className={styles.panelSquare}>
            <div className={styles.squareValue} onClick={handleOpenModal}>
                {getValue(boardState[panelIndex][cellIndex])}
            </div>
            <NumberSelectModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                passValue={handleSetValue}
            />
        </div>
    )
}

export default PanelSquare;