import styles from './stylesheets/ModalCloseButton.module.css';

function ModalCloseButton ( {handleClick}) {

    const onHandleClick = () => {
        handleClick();
        console.log("legume");
    }

    return (
        <div className={styles.modalCloseButton}>
            <div className={styles.x} onClick={onHandleClick}>X</div>
        </div>
    )
}

export default ModalCloseButton;