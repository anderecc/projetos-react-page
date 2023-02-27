import { useContext } from 'react';
import { AppContext } from '../context';
import { FaAngleDoubleRight } from 'react-icons/fa';
import styles from '../styles/experience.module.css';

let Experience = () => {
    let { company, state } = useContext(AppContext);

    let renderExperience = () => {
        return state ? (
            state.map((experience) => {
                let renderDuties = () => {
                    return experience.duties.map((dutie, index) => (
                        <li key={index} className={styles.dutie}>
                            <FaAngleDoubleRight
                                className={styles.icon}
                            ></FaAngleDoubleRight>
                            {dutie}
                        </li>
                    ));
                };

                return experience.company === company ? (
                    <div key={experience.id} className={styles.container}>
                        <h3 className={styles.title}>{experience.title}</h3>
                        <p className={styles.company}>{experience.company}</p>
                        <p className={styles.date}>{experience.dates}</p>
                        <ul className={styles.dutiesContainer}>
                            {renderDuties()}
                        </ul>
                        <button
                            className={styles.button}
                            onClick={() => console.log(company)}
                        >
                            More info
                        </button>
                    </div>
                ) : null;
            })
        ) : (
            <></>
        );
    };

    return <>{renderExperience()}</>;
};

export default Experience;
