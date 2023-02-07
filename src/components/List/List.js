import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => 
    <body className={styles.list}>
    <header className={styles.header}>
      <h2 className={styles.title}>Things to do <span>soon</span></h2>
            <p className={styles.description}>Interseting things I want to check out</p>
        </header>
        <div className={styles.columns}>
            <Column title="Books" />
            <Column title="Movies" />
            <Column title="Games" />
        </div>
    </body>

export default List;
