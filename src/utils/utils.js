export const consoleTypes = ["Playstation", "Xbox"];
export const editionTypes = ["Standart", "Delux", "Ultimate"];
export const sortTypes = [
   { name: "Популярное", type: 'rating', order: 'desc' },
   { name: "Цена", type: "price", order: 'desc' },
   { name: "Алфавит", type: "name", order: 'asc' }
];
/* Функция подсчета стоимости товара */

export const currentItemPrice = (obj) => obj.reduce((sum, obj) => obj.price + sum, 0);

/* Вспомогательная функция для начальной цены */
export const checkInitArray = (array) => {
   for (let i of array) {
      if (i !== null) {
         return i
      }
   };
};

/* Вспомогательные функции для подсчета количества */
export const getTotal = (obj, path) => {
   return Object.values(obj).reduce((sum, obj) => {
      const value = get(obj, path);
      return sum + value;
   }, 0);
};

const get = (obj, path) => {
   const [first, ...keys] = path.split('.');
   return keys.reduce((val, key) => {
      return val[key];
   }, obj[first]);
};



