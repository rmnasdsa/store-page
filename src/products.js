
import { container } from "./app.js";
const products = () => {

  const product = document.createElement('div');
  container.append(product);
  const product_img = document.createElement('img');
  product.append(product_img);
  const product_name = document.createElement('h1');
  product_name.className = 'product-name';
  product.append(product_name);
  const product_description = document.createElement('p');
  product_description.className = 'product-description';
  product.append(product_description);
  const product_cost = document.createElement('h3');
  product_cost.className = 'product-cost';
  product.append(product_cost);
  const select_product_btn = document.createElement('button');
  select_product_btn.className = 'btns';
  product.append(select_product_btn);
  select_product_btn.innerText = 'select';
}
export default products;