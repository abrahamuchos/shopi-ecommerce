/**
 * Calc total price in cart items
 * @param {Array<productObject>}items
 * @return {number}
 */
export const totalPrice = (items) => {
  let total = 0;
  items.map(item => total += item.price);

  return total;
}

/**
 *
 * @param {Date} date
 * @return string
 */
export const formatDateToString = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  if (day < 10) day = '0' + day;
  if (month < 10) month= '0' + month;

  return month + '/' + day + '/' + year;

}