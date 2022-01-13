import {useEffect, useState} from "react";
import {addAClothe, getAllClothes, updateAClothe, deleteAClothe} from "../api/clothes";
import {getForecast} from "../api/weather";
import Forecast from "../components/Forecast";

const Home = () => {

   const [clothes, setClothes] = useState(["No clothe in the database"]);
   const getClothes = () => getAllClothes().then((data) => setClothes(data))

   const [forecast, setForecast] = useState([])
   const getWeatherData = () => getForecast().then((data) => setForecast(data))

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
      getWeatherData()
   }, []);

   return <Forecast/>
}


export default Home;