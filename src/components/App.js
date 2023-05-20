import { useState } from 'react'
import './App.css';
import Menu from './Menu'
import Title from './Title'

function App() {
  const [location,updateLocation] = useState('Produits');
  return (
  <main>
    <Menu updateLocation={updateLocation}/>
    <Title location={location}/>
  </main>
  );
}

export default App;
