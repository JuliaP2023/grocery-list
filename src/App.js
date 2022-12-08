import './App.css';
import { GroceryList } from './GroceryList';
import image from './Pic1.jpg';
import imageTwo from './Pic2.jpg';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={image} alt='shopping bag' width='250px' />
      </div>
      <div className="container">
        <h1>Grocery list</h1>
      </div>
        <GroceryList/>
        <div className="container">
          <img src={imageTwo} alt='man' width='250px' />
        </div>
    </div>
  );
}

export default App;
