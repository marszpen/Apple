import styles from "./Container.module.scss"

const Container = props => {
    <div className={styles.container}>{props.childern}</div>
};

export default Container;