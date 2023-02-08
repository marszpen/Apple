import styles from './Button.module.scss';

const Button = props => {
    return <Button className={styles.button} placeholder={props.button} text='SEARCH' />
}

export default Button;