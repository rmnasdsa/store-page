
const calculate = () => {
  const increase_btn = document.querySelectorAll('.increase-btn');
  const decrease_btn = document.querySelectorAll('.decrease-btn');
  const remove_btn = document.querySelectorAll('.remove-btn');
  const number_of_product = document.querySelectorAll('.number-of-product');
  const shopping_cart_item = document.querySelectorAll('.shopping-cart-item');
  let count = 1;

  increase_btn[0].addEventListener('click', () => {
    count++;
    number_of_product[0].innerText = `${count}# `;
  })
  increase_btn[1].addEventListener('click', () => {
    count++;
    number_of_product[1].innerText = `${count}# `;
  })
  increase_btn[2].addEventListener('click', () => {
    count++;
    number_of_product[2].innerText = `${count}# `;
  })
  increase_btn[3].addEventListener('click', () => {
    count++;
    number_of_product[3].innerText = `${count}# `;
  })
  decrease_btn[0].addEventListener('click', () => {
    count--;
    if (count > 0)
    {number_of_product[0].innerText = `${count}# `;}
  })
  decrease_btn[1].addEventListener('click', () => {
    count--;
    if (count > 0)
    {number_of_product[1].innerText = `${count}# `;}
  })
  decrease_btn[2].addEventListener('click', () => {
    count--;
    if (count > 0)
    {number_of_product[2].innerText = `${count}# `;}
  })
  decrease_btn[3].addEventListener('click', () => {
    count--;
    if (count > 0)
    {number_of_product[3].innerText = `${count}# `;}
  })
  remove_btn[0].addEventListener('click', () => {
    shopping_cart_item[0].remove();
  })
  remove_btn[1].addEventListener('click', () => {
    shopping_cart_item[1].remove();
  })
  remove_btn[2].addEventListener('click', () => {
    shopping_cart_item[2].remove();
  })
  remove_btn[3].addEventListener('click', () => {
    shopping_cart_item[3].remove();
  })
}
export default calculate;