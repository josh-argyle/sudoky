import styles from './stylesheets/NumberSelectModal.module.css';
import Modal from 'react-modal';
import NumberSelectSquare from "./NumberSelectSquare";
import ModalCloseButton from "./ModalCloseButton";

// The modal to select the number to change a squares value.
function NumberSelectModal ( {isOpen, onRequestClose, passValue} ) {

    const handleSetValue = (value) => {
        passValue(value);
    }

    return (
        <Modal
            className={styles.numberSelectModal}
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            onRequestClose={onRequestClose}
            appElement={document.getElementById('root') || undefined}
            shouldCloseOnOverlayClick={true}
            >

            <div className={styles.closeButton}>
                <ModalCloseButton  handleClick={onRequestClose}/>
            </div>

            {/*<div className={styles.modalButtonContainer}>*/}
                <NumberSelectSquare value={1} setValue={handleSetValue}/>
                <NumberSelectSquare value={2} setValue={handleSetValue}/>
                <NumberSelectSquare value={3} setValue={handleSetValue}/>
                <NumberSelectSquare value={4} setValue={handleSetValue}/>
                <NumberSelectSquare value={5} setValue={handleSetValue}/>
                <NumberSelectSquare value={6} setValue={handleSetValue}/>
                <NumberSelectSquare value={7} setValue={handleSetValue}/>
                <NumberSelectSquare value={8} setValue={handleSetValue}/>
                <NumberSelectSquare value={9} setValue={handleSetValue}/>
            {/*</div>*/}
        </Modal>
    )
}

export default NumberSelectModal;