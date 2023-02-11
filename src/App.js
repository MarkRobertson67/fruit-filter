
import './App.css';
import FruitList from './components/FruitList';
import FruitContainer from './components/FruitContainer';


function App() {
  return (
    <div className="App">
  
      <FruitContainer fruits={FruitList}/>


    </div>
  );
}

export default App;
