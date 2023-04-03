import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedcer';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
     };

    const dispatch = useDispatch();

	return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <span>Title:</span> <TextInput type="text" title={title} onChange={e => setTitle(e.target.value)} />
            <span>Description:</span> <TextInput type="text" description={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm;
