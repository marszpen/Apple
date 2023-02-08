import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput className={styles.input} placeholder="Search…" />
            <Button className={styles.button}/>
        </form>
    );
};

export default SearchForm;