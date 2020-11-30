import React from 'react'
import { connect } from 'react-redux';
import { getFetchData } from '../../api';
import MainPage from '../../pages/MainPage';
import { setDataStore } from '../../redux/reducer/storeReducer';

const MainPageContainer = ({ dataStore, setDataStore }) => {

   React.useEffect(() => {
      getFetchData()
         .then(res => setDataStore(res.games))

   }, [])

   return <MainPage dataStore={dataStore} />
}


const mapStateToProps = (state) => {
   return {
      dataStore: state.store.dataStore
   }
};


export default connect(mapStateToProps, { setDataStore })(MainPageContainer);