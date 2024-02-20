import { root } from "./app.js";
const shoppingCartList = () => {

  const header = document.createElement('div');
  root.append(header);
  const shopping_cart_item = document.createElement('div');
  header.append(shopping_cart_item);
  shopping_cart_item.className = 'shopping-cart-item';
  const product_name_selected = document.createElement('h1');
  product_name_selected.className = 'product-name-selected';
  shopping_cart_item.append(product_name_selected);
  const product_cost_selected = document.createElement('p');
  product_cost_selected.className = 'product-cost-selected';
  shopping_cart_item.append(product_cost_selected);
  const number_of_product = document.createElement('span');
  number_of_product.className = 'number-of-product';
  shopping_cart_item.append(number_of_product);
  const sign_of_number_of_product = document.createElement('span');
  sign_of_number_of_product.className = 'sign-of-number-of-product';
  shopping_cart_item.append(sign_of_number_of_product);
  const increase_btn = document.createElement('button');
  shopping_cart_item.append(increase_btn);
  increase_btn.classList = 'increase-btn display'
  increase_btn.innerText = '+';
  const decrease_btn = document.createElement('button');
  shopping_cart_item.append(decrease_btn);
  decrease_btn.classList = 'decrease-btn display';
  decrease_btn.innerText = '-';
  const remove_btn = document.createElement('button');
  shopping_cart_item.append(remove_btn)
  remove_btn.classList = 'remove-btn display';
  remove_btn.innerText = 'X';
  const sum_btn = document.createElement('button');
  sum_btn.classList = 'sum-btn';
  header.append(sum_btn);
  sum_btn.innerText = 'sum';
  const payments = document.createElement('h1');
  payments.className = 'payments';
  header.append(payments);
}
export default shoppingCartList;