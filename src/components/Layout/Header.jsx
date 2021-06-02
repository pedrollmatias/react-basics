import React from 'react';
import PresentationImage from './PresentationImage';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <PresentationImage />
    </>
  );
};

export default Header;
