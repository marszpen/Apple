import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    const [columns, setColumns] = useState([
        {
                id: 1,
                title: 'Books',
                icon: 'book',
                cards: [
                    { id: 1, title: 'This is Going to Hurt' },
                    { id: 2, title: 'Interpreter of Maladies' }
                ]
            },
            {
                id: 2,
                title: 'Movies',
                icon: 'film',
                cards: [
                    { id: 1, title: 'Harry Potter' },
                    { id: 2, title: 'Star Wars' }
                ]
            },
            {
                id: 3,
                title: 'Games',
                icon: 'gamepad',
                cards: [
                    { id: 1, title: 'The Witcher' },
                    { id: 2, title: 'Skyrim' }
                ]
            }
        ]);
        
};

	return (
        <form onSubmit={handleSubmit}>
            <span>Title:</span> <input type="text" title={title} onChange={e => setTitle(e.target.value)} />
            <span>Icon:</span> <input type="text" icon={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;
