import styles from './stylesheets/NumberSelectSquare.module.css';

// One number square from the number select panel.
function NumberSelectSquare ( {value, setValue} ) {

    const handleNumberClick = () => {
        setValue(value);
    }

    return (
        <div className={styles.numberSelectSquare} onClick={handleNumberClick}>{value}</div>
    )
}

export default NumberSelectSquare;