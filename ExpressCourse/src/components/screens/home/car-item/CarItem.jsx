import styles from "../Home.module.css";
import PropTypes from 'prop-types';

const CarItem = ({car}) => {
  return (
      <div key={car.id} className={styles.item}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${car.image})`
                }}
              />
              <div className={styles.info}></div>
              <h2>{car.name}</h2>
              <p>
                {new Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "USD"
                }).format(car.price)}
              </p>
              <button>Read more</button>
            </div>
  );
};
CarItem.propTypes = {
    car: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  };

export default CarItem;
