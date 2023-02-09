
import Main from './Main';
import Forecast from './Forecast';
import './App.css';

function App() {
  return (
    <div className="city">
  <p className="intro"> The weather app</p>
   <form className="search-form">
     <input type="text" placeholder="Enter your city here" />
       <input className="btn" type="submit" value="Search" />
        <input className="currentbar" type="button" value="Current" />
   </form>
      <Main />
            <Forecast />
    </div>
  );
}

export default App;
