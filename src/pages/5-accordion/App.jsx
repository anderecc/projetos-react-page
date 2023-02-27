import { useEffect, useState } from 'react';
import Question from './components/Question';
import styles from './styles/app.module.css';
import data from './data';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Accordion');
    let [state] = useState(data);

    let renderQuestions = () => {
        return state ? (
            state.map((quest) => {
                return (
                    <Question
                        key={quest.id}
                        question={quest.title}
                        response={quest.info}
                    ></Question>
                );
            })
        ) : (
            <></>
        );
    };
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Questions And Answers About Login
                </h1>
                <div className={styles.content}>{renderQuestions()}</div>
            </div>
        </div>
    );
}

export default App;
