import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
import clsx from 'clsx'

const Card = props => {
    const cardId = props.id;
    const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);
    const dispatch = useDispatch ();

    const handleSubmit = e => {
        e.preventDefault();
        setFavoriteValue(!favoriteValue);
        console.log(cardId);
        dispatch(toggleCardFavorite(cardId));
    }
    
    
    return (
        <li className={styles.card}>{props.title}
        <button onClick={handleSubmit} className={clsx(styles.button, favoriteValue && styles.isActive)}>
            <span className={"fa fa-star-o"}></span>
        </button>
        </li>
    );
};

export default Card;

