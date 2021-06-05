import React,{useState,useEffect} from 'react';
import RecipeList from './RecipeList';
function RecipeData(){
  useEffect(() =>{RecipeFetch();},[]);
  const[item,setItem] = useState([],{
    isLoading:false,
  }
    
);

// const APP_ID = "3d55586c";
//  const APP_KEY = "bfb37645a0bb2fcf23bb0b87f3d892bf";
const RecipeFetch = async () =>{
let Data = await fetch(`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`);
let Response = await Data.json();
console.log(Response.hits);
setItem(Response.hits)
}
  return(
  
<div>
    {item.map(menu => (
            <RecipeList
              key={menu.recipe.label}
              name={menu.recipe.label}
              // image={menu.recipe.image}
              // dishType={menu.recipe.cuisineType}
              // calories={menu.recipe.calories}
            />
          ))}
    </div>
  )
}
export default RecipeData;