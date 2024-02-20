export let count = 1;
const calculate = () => {

  const remove_btn = document.querySelectorAll('.remove-btn');
  const shopping_cart_item = document.querySelectorAll('.shopping-cart-item');
  const sum_btn = document.querySelectorAll('.sum-btn');
  const payments = document.querySelectorAll('.payments');
  
  remove_btn[0].addEventListener('click', () => {
    shopping_cart_item[0].remove();
    sum_btn[0].remove();
    payments[0].remove();
  })
  remove_btn[1].addEventListener('click', () => {
    shopping_cart_item[1].remove();
    sum_btn[1].remove();
    payments[1].remove();
  })
  remove_btn[2].addEventListener('click', () => {
    shopping_cart_item[2].remove();
    sum_btn[2].remove();
    payments[2].remove();
  })
  remove_btn[3].addEventListener('click', () => {
    shopping_cart_item[3].remove();
    sum_btn[3].remove();
    payments[3].remove();
  })
}
export default calculate;