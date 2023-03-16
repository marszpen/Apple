import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';

/*const Hero = () => {
  return (
    <div className="hero">
      <h1 className="title">My first React App</h1>
      <p className="subtitle">A simple to-do app, with lists, columns and card</p>
    </div>
  );
};

export default Hero;*/

const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <PageTitle className={styles.title}>My first React App </PageTitle>
      <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
    </div>
  );
};

export default Hero;