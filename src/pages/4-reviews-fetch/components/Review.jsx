import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Buttons from '../components/Buttons';
import { FaQuoteRight } from 'react-icons/fa';
import styles from '../styles/review.module.css';

let Review = () => {
    let { state, count } = useContext(AppContext);
    console.log(count);

    return state ? (
        <div className={styles.container}>
            <div className={styles.containerImage}>
                <div className={styles.image}>
                    <FaQuoteRight className={styles.quote}></FaQuoteRight>
                    <img
                        src={state[count].image}
                        alt={state[count].name + 'image'}
                    />
                </div>
            </div>
            <h3 className={styles.name}>{state[count].name}</h3>
            <p className={styles.job}>{state[count].job}</p>
            <p className={styles.text}>{state[count].text}</p>
            <Buttons></Buttons>
        </div>
    ) : (
        <div>loading</div>
    );
};

export default Review;
