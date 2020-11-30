
import React from 'react';
import { Route } from 'react-router-dom';
import { getFetchData } from './api';
import { Header } from './components';
import { CartPage, MainPage } from './pages';

const App = () => {

  const [data, setData] = React.useState(null)
  console.log(data);

  React.useEffect(() => {
    getFetchData()
      .then(res => setData(res.games))

  }, [])


  return (
    <div className="wrapper">
      <Header />
      <Route exact path={"/"} render={() => <MainPage data={data} />} />
      <Route exact path={"/cart"} component={CartPage} />

    </div >
  );
}

export default App;
