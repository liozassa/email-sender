import { FC } from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import SendEmail from './components/SendEmail/SendEmail';
import Footer from './components/Footer/Footer';
import { Redirect, Route } from 'react-router-dom';
import ValidationEmail from './components/ValidationEmail/EmailVerification';

const App: FC = () => {
  return (
    <div className="app">
      <Toolbar></Toolbar>
      <main>
        <Route
          exact
          path="/"
          render={() => {
              return (
                <Redirect to="/send-email" />
              )
          }}
        />
        <Route path="/send-email">
          <SendEmail />
        </Route>
        <Route path="/validation-email">
          <ValidationEmail />
        </Route>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;