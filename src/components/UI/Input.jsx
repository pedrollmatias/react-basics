import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(function input(props, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.options.id}>{props.label}</label>
      <input ref={ref} {...props.options} />
    </div>
  );
});

export default Input;
