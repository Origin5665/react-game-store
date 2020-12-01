import React from 'react';
import { Route } from 'react-router-dom';
import { setDataStore } from './redux/reducer/storeReducer';
import { getFetchData } from './api';
import { Header } from './components';
import MainPage from './pages/MainPage';
import { CartPage } from './pages';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    getFetchData()
      .then(res => dispatch(setDataStore(res)))
  })

  return (
    <div className="wrapper">
      <Header />
      <Route exact path={"/"} component={MainPage} />
      <Route exact path={"/cart"} component={CartPage} />
    </div >
  );
};

export default App;
