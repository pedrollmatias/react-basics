import React from 'react';
import PresentationImage from './PresentationImage';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <HeaderCartButton />
      </header>
      <PresentationImage />
    </>
  );
};

export default Header;
