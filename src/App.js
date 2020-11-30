
import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import MainPageContainer from './components/containers/MainPageContainer';
import { CartPage } from './pages';

const App = () => {






  return (
    <div className="wrapper">
      <Header />
      <Route exact path={"/"} render={() => <MainPageContainer />} />
      <Route exact path={"/cart"} component={CartPage} />
    </div >
  );
}

export default App;
