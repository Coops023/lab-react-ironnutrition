import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Divider} from "antd";

function App() {
const [foodsList, setFoodsList] = useState(foods)
const [foodsListCopy, setFoodsListCopy] = useState(foods)
// console.log(foodsList)
const addNewFood = newFood => {
  const updateFoodsList = [...foodsList, newFood];
  setFoodsList(updateFoodsList);
}

const filteredFood = (str) => {
  let filteredFood 
  if (str === ""){
    filteredFood = foodsListCopy;
  }else{
    filteredFood = foodsListCopy.filter((food)=> {
      return food.name.toLowerCase().includes(str.toLowerCase())
    })
  }
  setFoodsList(filteredFood)
}



  return (
  
    <>
    <Search filteredFood={filteredFood}/>
    <AddFoodForm addFood={addNewFood}/>
    <Divider>Foods List</Divider>
      {foodsList.map((food)=>(
        
          <FoodBox name={food.name} image={food.image} calories={food.calories} servings={food.servings} />
  
      ))}
    </>
  );
}

export default App;
