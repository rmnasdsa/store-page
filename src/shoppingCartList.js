import { root } from "./app";
const shoppingCartList = () => {

  const header = document.createElement('div');
  root.append(header);
  const shopping_cart_item = document.createElement('div');
  header.append(shopping_cart_item);
  const product_name_selected = document.createElement('h2');
  shopping_cart_item.append(product_name_selected);
}
export default shoppingCartList;