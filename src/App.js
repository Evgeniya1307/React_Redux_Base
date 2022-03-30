import './App.css';
import Likes from './Likes';
import store from './redux/stor';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
          <Likes store={store}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
