import Axios from 'axios';
export const getFetchData = async () => {
   const res = await Axios.get('http://localhost:3001/games')

   return res.data
}

