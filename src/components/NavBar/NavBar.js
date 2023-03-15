import style from './NavBar.module.scss';

const NavBar = () => {
    <nav className={style.navbar}>
            <a href="#/"><i class="fa-light fa-bars-progress"></i></a>
            <ul>
                <li><a href='#/home'>Home</a></li> 
                <li><a href='#/favorite'>Favorite</a></li>
                <li><a href='#/about'>About</a></li>
            </ul>
    </nav>
}

export default NavBar;