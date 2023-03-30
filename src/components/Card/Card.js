import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite } from '../../redux/store';
import styles from './Card.module.scss';
//import clsx from 'clsx'

const Card = props => {
    const cardId = props.cardId;
    const [favouriteValue, setFavouriteValue] = useState(props.isFavourite);
    const dispatch = useDispatch ();

    const handleSubmit = e => {
        e.preventDefault();
        setFavouriteValue(!favouriteValue);
        dispatch(toggleCardFavourite(cardId));
    }
    
    
    return (
        <li className={styles.card}>{props.title}
        <button onClick={submitClick} className={clsx(styles.button, props.isFavourite && styles.isActive)}>
            <span className={"fa fa-star-o"}></span>
        </button>
        </li>
    );
};

export default Card;

