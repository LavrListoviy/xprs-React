import { useState } from "react";
import styles from "./CreateCarForm.module.css";

const defaultData = {
  name: "",
  price: 0,
  image: ""
}

// eslint-disable-next-line react/prop-types
const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(defaultData);

  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => [
      {
        id: prev.length + 1,
        ...data
      },
      ...prev
    ]);
    setData(defaultData);
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            name: e.target.value
          }))
        }
        value={data.name}
      />
      <input
        type="number"
        placeholder="Price"
        value={data.price}
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            price: e.target.value
          }))
        }
      />
      <input
        type="text"
        placeholder="Image"
        value={data.image}
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            image: e.target.value
          }))
        }
      />

      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
