import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { ContactView } from '@views/ContactView/ContactView';
import { HomeView } from '@views/HomeView/HomeView';
import { ProjectDetailsView } from '@views/ProjectDetailsView/ProjectDetailsView';
import { ProjectsView } from '@views/ProjectsView/ProjectsView';

import { Footer } from '../Layout/Footer/Footer';
import { Nav } from '../Layout/Nav/Nav';
import { Container } from '../Utils/Container/Container';
import './App.css';

function App() {
  const history = useHistory();

  useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
      });

      return () => {
        unlisten();
      };
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Route path="/portfolio">
              <ProjectsView />
            </Route>
            <Route path="/project-details/:id">
              <ProjectDetailsView />
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
