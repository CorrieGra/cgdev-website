import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContactView } from '../../views/ContactView/ContactView';
import { HomeView } from '../../views/HomeView/HomeView';
import { Footer } from '../Layout/Footer/Footer';
import { Nav } from '../Layout/Nav/Nav';
import { Container } from '../Utils/Container/Container';
import './App.css';

function App() {
  return (
      <div className="App">
        {/* Navigation Bar */}
        <Nav />

        {/* Body Container */}
        <Container>
          {/* Switch For Routes */}
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>

            <Route path="/contact-me">
              <ContactView />
            </Route>
          </Switch>
        </Container>

        {/* Footer */}
        <Footer />
      </div>
  );
}

export default App;
