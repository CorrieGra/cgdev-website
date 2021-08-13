import React from 'react';
import { Switch } from 'react-router-dom';
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
            
          </Switch>
        </Container>

        {/* Footer */}
        <Footer />
      </div>
  );
}

export default App;
