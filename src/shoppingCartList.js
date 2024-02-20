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
}
export default shoppingCartList;