import './App.css';
import Star from '../src/Components/Star/Star'
import Hero from './Components/Hero/Hero'
import Rating from './Components/Ratings/Ratings'
import Modal from './Components/Modal/Modal';
import { useState } from 'react';


function App() {
  const [rating,setRating]=useState(null);
console.log(rating)
  return (
    <div className="App"> 
      
      {!rating && <Rating setRating={setRating}/>}
      {rating && <Modal rating={rating}/>}
    </div>
  );
}

export default App;
