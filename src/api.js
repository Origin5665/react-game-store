import Axios from 'axios';
export const getFetchData = async () => {
   const res = await Axios.get('http://localhost:3000/database.json')
   return res.data
}

