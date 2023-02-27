import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Response from './Response';
import styles from '../styles/question.module.css';

let Question = ({ question, response }) => {
    let [open, setOpen] = useState(false);

    return (
        <div className={styles.questionContainer}>
            <div className={styles.question}>
                <p>{question}</p>
                {!open ? (
                    <button
                        className={styles.button}
                        onClick={() => setOpen(true)}
                    >
                        <FaPlus></FaPlus>
                    </button>
                ) : (
                    <button
                        className={styles.button}
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <FaMinus></FaMinus>
                    </button>
                )}
            </div>
            {open ? <Response response={response}></Response> : <></>}
        </div>
    );
};

export default Question;
