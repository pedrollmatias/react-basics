import classes from './Input.module.css';

const Input = (props) => {
  const { label, options } = props;

  return (
    <div className={classes.input}>
      <label htmlFor={options.id}>{label}</label>
      <input {...options} />
    </div>
  );
};

export default Input;
