// import { useMemo } from "react";
import { useEffect, useState } from "react";
import CarItem from "./car-item/Caritem.jsx";
import { cars as carsData} from "./cars.data.js";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {CarService} from "../../../services/car.service.js"
import styles from "./Home.module.css"
/*
const filteredCars = useMemo(
  () => cars.filter((car) => car.price > 20000),
  []
);
*/
const Home = () => {
  const [cars, setCars] = useState(carsData)
  console.log(cars);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll()

      console.log(data);
    }
    fetchData();
  },[]);
  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarForm setCars={setCars}/>
      <div className={styles.content_container}>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars listed</p>
        )}
      </div>
    </div>
  );
};

export default Home;
