import { useContext } from 'react';
import styles from '../styles/components/CountDown.module.css';
import { CountDownContext } from '../contexts/CountDownContext';

export default function CountDown(){

    const { minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown} = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? ( 
            <button 
                disabled
                className={`${styles.countdownButton}`}>
                Ciclo encerrado
            </button>
            ) : (
                <>
                {isActive ? (
                    <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountDown}>
                    Abandonar ciclo
                </button>
                ):(
                    <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountDown}>
                        Iniciar um ciclo
                </button>
                )}
                </>
            ) }

            
            

            
        </div>
    )
}