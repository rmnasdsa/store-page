import { root } from "./app.js";
const shoppingCartList = () => {

  const header = document.createElement('div');
  root.append(header);
  const shopping_cart_item = document.createElement('div');
  header.append(shopping_cart_item);
  const product_name_selected = document.createElement('h1');
  product_name_selected.className = 'product-name-selected';
  shopping_cart_item.append(product_name_selected);
  const product_cost_selected = document.createElement('p');
  product_cost_selected.className = 'product-cost-selected';
  shopping_cart_item.append(product_cost_selected);
}
export default shoppingCartList;