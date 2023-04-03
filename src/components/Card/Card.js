import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsReducer';
import { removeCard } from "../../redux/cardsReducer";
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

    const deleteCard = e => {
        e.preventDefault();
        dispatch(removeCard(cardId));
    }
    
    
    return (
        <li className={styles.card}>{props.title}
            <div className={styles.buttons}>
                <button onClick={handleSubmit}
                    className={clsx(styles.button, favoriteValue && styles.isActive)}>
                    <span className={"fa fa-star-o"}></span>
                </button>
                <button onClick={deleteCard}
                    className={styles.button}
                >
                    <i className={'fa fa-trash'} />
                </button>
            </div>
        </li>
    );
};

export default Card;

