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