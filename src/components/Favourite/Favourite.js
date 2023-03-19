import style from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favourite = () => (
    <div>
        <PageTitle className={style.favourite}>FAVORITE</PageTitle>
        <p>Lorem Ipsum</p>
    </div>
);

export default Favourite;