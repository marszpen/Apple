import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = (props) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState(''); 
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHING', payload: {searchValue} });
    }
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." />
            <Button>
            <span className="fa fa-search" />
            </Button>

        </form>
    );
  };


export default SearchForm;