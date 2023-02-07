import styles from './Button.module.scss';

const Button = (props) => {
    return <button className={styles.button} placeholder={props.placeholder} text='text' />
}

export default Button;