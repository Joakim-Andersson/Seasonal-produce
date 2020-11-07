import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch, Route,
} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Main from './component/Main';
import About from './component/About';

const veggiePerMonth = [
  { "id": 0, "month": "January", "veggies": ["Brussels sprouts", "Kale", "Yellow onion", "artichoke", "Carrots", "Parsnip", "Potato. Celeriac", "Black radish", "Beetroot", "Red cabbage", "Black root", "Cabbage"] },
  { "id": 1, "month": "February", "veggies": ["Brussels sprouts", "Kale", "Yellow onion", "artichoke", "Carrots", "Parsnip", "Potato", "Celeriac", "Black radish", "Beetroot", "Black root", "Cabbage"] },
  { "id": 2, "month": "March", "veggies": ["Yellow onion", "artichoke", "Carrots", "Parsnip", "Potato", "Celeriac", "Beetroot", "Cabbage"] },
  { "id": 3, "month": "April", "veggies": ["Yellow onion", "Dandelion", "Carrots", "Nettles", "Parsnip", "Parsley", "Potato", "Ramson", "Beetroot"] },
  { "id": 4, "month": "May", "veggies": ["Dill", "Chive", "Dandelion", "Nettles", "Parsnip", "Parsley", "Potato", "Ramson", "Radishes", "Beetroot", "Chives", "Asparagus", "Tomato"] },
  { "id": 5, "month": "June", "veggies": ["Cauliflower", "Broccoli", "Yellow onion", "Cucumber", "Kohlrabi", "Nettles", "Parsnip", "Parsley", "Potato", "Ruccola Radishes", "Red onion Beetroot", "Chives", "Sugar peas", "Asparagus Spinach", "Tomato", "Cabbage"] },
  { "id": 6, "month": "July", "veggies": ["Celery", "Cauliflower", "Broccoli", "Cucumber", "Artichoke", "Kohlrabi", "Majrova", "Mangold", "Carrots", "Parsnip", "Pepper", "Parsley", "Potato", "Celeriac", "Ruccola", "Radishes", "Beetroot", "Sugar peas", "Spinach", "Squash", "Tomato", "Wax beans", "Cabbage"] },
  { "id": 7, "month": "August", "veggies": ["Celery", "Cauliflower", "Broccoli", "Cucumber", "Artichoke", "Kohlrabi", "Majrova", "Maize", "Mangold", "Carrots", "Parsnip", "Pepper", "Parsley", "Potato", "Pumpkin", "Ruccola", "Radishes", "Black radish", "Beetroot", "Red cabbage", "Spinach", "Squash", "Tomato", "Wax beans", "Cabbage"] },
  { "id": 8, "month": "September", "veggies": ["Celery", "Cauliflower", "Broccoli", "Brussels sprouts", "Cucumber", "Artichoke", "Kohlrabi", "Majrova", "Maize", "Mangold", "Carrots", "Parsnip", "Pepper", "Parsley", "Potato", "Pumpkin", "Celeriac", "Ruccola", "Black radish", "Beetroot", "Red cabbage", "Savoy", "Spinach", "Squash", "Black root", "Tomato", "Wax beans", "Cabbage"] },
  { "id": 9, "month": "October", "veggies": ["Celery", "Cauliflower", "Broccoli", "Brussels sprouts", "Cucumber", "Artichoke", "Carrots", "Parsnip", "Parsley", "Potato", "Pumpkin Leek", "Celeriac", "Black radish", "Beetroot", "Red cabbage", "Squash", "Black root", "Tomato", "Cabbage"] },
  { "id": 10, "month": "November", "veggies": ["Brussels sprouts", "Kale", "Carrots", "Parsnip", "Potato", "Pumpkin", "Celeriac", "Black radish", "Beetroot", "Red cabbage", "Black root", "Cabbage"] },
  { "id": 11, "month": "December", "veggies": ["Brussels sprouts", "Kale", "Yellow onion", "artichoke", "Carrots", "Parsnip", "Potato", "Pumpkin", "Celeriac", "Black radish", "Beetroot", "Red cabbage", "Salad bowl", "Savoy cabbage", "Black root", "Cabbage"] }
]
function App() {
  const [foodNow, setFoodNow] = useState([]);
  const [nowMonth, setNowMonth] = useState('');

  const day = new Date();
  const monthIndex = day.getMonth();

  useEffect(() => {
    getMonthFood(monthIndex);
  }, []);

  const getMonthFood = monthIndex => {
    const monthNow = veggiePerMonth.find(month => month.id === monthIndex);
    const veggies = monthNow.veggies;
    const monthName = monthNow.month;
    setFoodNow(veggies);
    setNowMonth(monthName);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/food">
            <Navbar />
            <Header />
            <Main foodNow={foodNow} nowMonth={nowMonth} />
            <Footer />
          </Route>
          <Route path="/food/">
            <Navbar />
            <Main foodNow={foodNow} nowMonth={nowMonth} />
            <Footer />
          </Route>
          <Route exact path="/About">
            <Navbar />
            <About />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


