import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p align="justify">
        Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at
        home.
      </p>
      <p align="justify">
        All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
