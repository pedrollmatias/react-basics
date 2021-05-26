import React from 'react';
import PresentationImage from './PresentationImage';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <button>Cart</button>
      </header>
      <PresentationImage />
    </>
  );
};

export default Header;
