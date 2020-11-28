import { Route } from 'react-router-dom';
import { Header } from './components';
import { CartPage, MainPage } from './pages';



const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Route exact path={"/"} component={MainPage} />
      <Route exact path={"/cart"} component={CartPage} />

    </div >
  );
}

export default App;
