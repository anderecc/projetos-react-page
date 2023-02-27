import { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import styles from '../styles/companies.module.css';

let Companies = () => {
    let { state, setCompany } = useContext(AppContext);
    useEffect(() => {
        if (state) {
            document.getElementById('TOMMY').classList.add(styles.active);
        }
    }, [state]);

    let renderCompanies = () => {
        return state ? (
            state.map((experience) => {
                let handleChange = (e) => {
                    document
                        .querySelectorAll(`.${styles.buttonCompany}`)
                        .forEach((button) => {
                            button.classList.remove(styles.active);
                        });
                    setCompany(experience.company);
                    e.target.classList.add(styles.active);
                };

                return (
                    <li key={experience.id} className={styles.company}>
                        <button
                            id={experience.company}
                            className={styles.buttonCompany}
                            onClick={handleChange}
                        >
                            {experience.company}
                        </button>
                    </li>
                );
            })
        ) : (
            <></>
        );
    };

    return (
        <>
            <ul className={styles.companiesContainer}>{renderCompanies()}</ul>
        </>
    );
};

export default Companies;
