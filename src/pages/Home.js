import {useEffect, useState} from "react";
import {addAClothe, getAllClothes, updateAClothe, deleteAClothe} from "../api/clothes";
import {Link} from "react-router-dom";

const Home = () => {

  const [clothes, setClothes] = useState(["No clothe in the database"]);

  const getClothes = () => getAllClothes().then((data) => setClothes(data))

  const clickHandler = () => {
    addAClothe({
      brand: "New Balance",
      size: "42.5",
      type: "shoes",
      color: "green"
    }).then(() => {
      getClothes();
    });
  }

  const updateClickHandler = (clothe) => {
    updateAClothe({
      id: clothe.id,
      brand: "The North Face",
      size: "L",
      type: "parka",
      color: "red"
    })
      .then(() => {
        getClothes();
      });
  }

  const deleteClickHandler = (clothe) => {
    deleteAClothe(clothe.id)
      .then(() => {
        getClothes();
      });
  }

  useEffect(() => {
    getClothes()
  }, []);

  return <>
    <button onClick={clickHandler}>Add a new clothe</button>
    <ul>
      {
        clothes.map((clothe) =>
            <li key={clothe.id}>
              {/*
            <Link to={`user/${clothe.id}`}>{clothe.firstname} {clothe.lastname}</Link>
            */}
              <p>{clothe.brand} {clothe.color}</p>
              <button type="button" onClick={() => updateClickHandler(clothe)}>Update</button>
              <button type="button" onClick={() => deleteClickHandler(clothe)}>Delete</button>
            </li>)
      }
    </ul>
  </>;
}


export default Home;