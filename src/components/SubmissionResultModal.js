import styles from './stylesheets/SubmissionResultModal.module.css';
import {useEffect, useState} from "react";
import Modal from 'react-modal';
import ModalCloseButton from "./ModalCloseButton";

function SubmissionResultModal ( {isOpen, onRequestClose, submissionResult} ) {

    // Default colour for the modal fade.
    const defaultOverlayStyles = {
        backgroundColor: 'rgba(56, 0, 0, 0.75)', // Your overlay styles here
    };
    const [overlayStyles, setOverlayStyles] = useState(defaultOverlayStyles);
    useEffect(() => {
        if (submissionResult === "Correct!") {
            setOverlayStyles({
                backgroundColor: 'rgba(56, 220, 130, 0.75)'
            });
        } else {
            setOverlayStyles(defaultOverlayStyles);
        }
    }, [submissionResult]);



    return (
        <Modal
            className={styles.submissionResultModal}
            isOpen={isOpen}
            shouldCloseOnEsc={true}
            onRequestClose={onRequestClose}
            appElement={document.getElementById('root') || undefined}
            shouldCloseOnOverlayClick={true}
            style={{ overlay: overlayStyles }}
            >

            <ModalCloseButton handleClick={onRequestClose}/>

            <div className={styles.submissionResult}>
                {submissionResult}
            </div>

        </Modal>
    )
}

export default SubmissionResultModal;