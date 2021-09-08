import './App.css';
import Countries from './containers/Countries';
import Languages from './containers/Languages';

const App = () => {

  return (
    <div className="App">
      <header>LandRyna</header>
        <Countries />
        <Languages />
    </div>
  );
}

export default App;
