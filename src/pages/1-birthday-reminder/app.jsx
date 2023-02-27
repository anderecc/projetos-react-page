import People from './components/people';
import styles from './styles/app.module.css';
import data from './data/data';
import { useEffect, useState } from 'react';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    let [state, setState] = useState(data);
    useTitle('React Birthday');

    function renderPeoples() {
        return state === ''
            ? null
            : state.map((people) => {
                  return (
                      <People
                          key={people.id}
                          name={people.name}
                          image={people.image}
                          id={people.id}
                          age={people.age}
                      ></People>
                  );
              });
    }
    return (
        <div className={styles.body}>
            <div className={styles.app}>
                <h1 className={styles.title}>List Remember</h1>
                <div className={styles.container}>
                    <ul className={styles.list}>{renderPeoples()}</ul>
                </div>
                <button className={styles.button} onClick={() => setState('')}>
                    Clear All
                </button>
            </div>
        </div>
    );
}

export default App;
