import style from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favourite = () => {
    return(
    <div>
        <PageTitle className={style.favourite}>FAVOURITE</PageTitle>
        <p>Lorem Ipsum</p>
    </div>
)};

export default Favourite;