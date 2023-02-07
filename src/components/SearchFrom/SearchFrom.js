import styles from './SearchFrom.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search…" />
            <Button />
        </form>
    );
};

export default SearchForm;