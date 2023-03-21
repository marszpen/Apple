import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from "../../redux/store";

const CardForm = props => {
    const [title, setTitle] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ addCard, payload: {title, columnId: props.columnId} });
        setTitle('');
    }

    const dispatch = useDispatch();
    
	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;
