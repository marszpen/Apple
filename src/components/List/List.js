import styles from './List.module.scss';
import Column from './../Column/Column';
import SearchForm from './../SearchForm/SearchForm';
import ColumnForm from '../ColumnForm/ColumnForm';


const List = () => {

    const [columns, setColumns] = useState([
        { id: 1, title: 'Books', icon: 'book' },
        { id: 2, title: 'Movies', icon: 'film' },
        { id: 3, title: 'Games', icon: 'gamepad' }
    ]);
  
    setTimeout(() => {
      setColumns([...columns, { id: 4, title: 'Test column'}]);
    }, 2000);
  
    const handleSubmit = e => {
		e.preventDefault();
		setColumns([...columns, { id: shortid(), title: value }]);
		setValue('');
    };
};
    

   <body className={styles.list}>
        <header className={styles.header}>
            <h2 className={styles.title}>Things to do <span>soon!</span></h2>
            <p className={styles.description}>Interseting things I want to check out</p>
        </header>
        <SearchForm />
        <section className={styles.columns}>
            {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
        </section>
        <ColumnForm handleSubmit={handleSubmit} />
    </body>

export default List
