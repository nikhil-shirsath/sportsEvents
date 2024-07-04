
import './App.css';

import { Greet } from './components/Greet';
import Welcome from './classcomponent/Welcome';
import Navbar from './components/navbar';
// if file name is not matching then we will get module not file error 

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Greet />   
        {/* { //this ta name must be match with import name  in react     } */}
        <Welcome />

    </div>
  );
}

export default App;
