import Axios from 'axios';

export const getFetchData = async (category, sortBy) => {
   const res = await Axios.get(`/games?${category !== null
      ? `category=${category}`
      : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
   return res.data
}

