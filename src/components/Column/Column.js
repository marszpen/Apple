import styles from './Column.module.scss'

const Column = props => {
        <article className={styles.column}>
            <h2 className={styles.title}>{props.title}</h2>
        </article>
};

export default Column;