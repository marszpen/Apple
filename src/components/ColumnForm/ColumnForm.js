import styles from './ColumnForm.module.scss';

const ColumnForm = () => {
	return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button>Add column</button>
        </form>
	);
};

export default ColumnForm;
