import React from 'react';
import AppHeader from '../src/components/app-header/AppHeader';
import './App.css';
import {data} from "./utils/data";
import BurgerIngredients from "./components/burger-ingredients/BurgerIngredients";

function App() {
    return (
    <div className="App">
        <AppHeader/>
        <BurgerIngredients data={data}/>
    </div>
  );
}

export default App;
