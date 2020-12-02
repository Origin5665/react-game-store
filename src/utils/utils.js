
export const checkInitArray = (array) => {
   for (let i of array) {

      if (i !== null) {
         return i
      }
   }
}