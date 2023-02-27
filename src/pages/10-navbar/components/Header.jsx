import { useContext } from 'react';
import { AppContext } from '../context';
import ItemLink from './ItemLink';
import styles from '../styles/header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

let Header = () => {
    let { state, handleMenuOpenOrClose } = useContext(AppContext);

    let renderItems = (items) => {
        return items.map((link) => {
            return (
                <ItemLink
                    key={link.id}
                    url={link.url}
                    text={link.text ? link.text : link.icon}
                    classNa={link.text ? 'link' : 'social'}
                    targ={link.icon ? true : false}
                />
            );
        });
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h5 className={styles.logo}>
                    C<span>oooooo</span>der
                </h5>

                {state.width === 'desktop' ? (
                    <>
                        <ul className={styles.linksContainer}>
                            {state.links ? renderItems(state.links) : <></>}
                        </ul>
                        <ul className={styles.socialContainer}>
                            {state.social ? renderItems(state.social) : <></>}
                        </ul>
                    </>
                ) : (
                    <>
                        {!state.menu ? (
                            <FaBars
                                className={styles.button}
                                onClick={() =>
                                    handleMenuOpenOrClose(!state.menu)
                                }
                            />
                        ) : (
                            <FaTimes
                                className={styles.button}
                                onClick={() =>
                                    handleMenuOpenOrClose(!state.menu)
                                }
                            />
                        )}
                    </>
                )}
            </div>
            {state.menu && state.width === 'mobile' ? (
                <>
                    <ul
                        className={`${styles.linksContainer} ${styles.menuOpen}`}
                    >
                        {state.links ? renderItems(state.links) : <></>}
                        <ul className={styles.socialContainer}>
                            {state.social ? renderItems(state.social) : <></>}
                        </ul>
                    </ul>
                </>
            ) : (
                <>
                    <ul
                        className={`${styles.linksContainer} ${styles.menuClose}`}
                    >
                        {state.links ? renderItems(state.links) : <></>}
                        <ul className={styles.socialContainer}>
                            {state.social ? renderItems(state.social) : <></>}
                        </ul>
                    </ul>
                </>
            )}
        </div>
    );
};

export default Header;
