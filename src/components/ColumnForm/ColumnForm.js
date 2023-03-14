import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setTitle('');
        setIcon('');
     };

    const dispatch = useDispatch();

	return (
        <form onSubmit={handleSubmit}>
            <span>Title:</span> <input type="text" title={title} onChange={e => setTitle(e.target.value)} />
            <span>Icon:</span> <input type="text" icon={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;
