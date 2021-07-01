import { FC } from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App: FC = () => {
  return (
    <div className="app">
      <Toolbar></Toolbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;