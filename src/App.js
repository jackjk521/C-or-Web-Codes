// import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';

import CardDisplay from './components/cardDisplay';

function App() {

  const[assets, setAssets] = useState(0);

  useEffect(() => {
    
    fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20')
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setAssets(response.assets)})
      .catch(err => console.error(err));
    
    }, []);

  return (

    <CardDisplay assets = {assets} />

  );
}

export default App;
