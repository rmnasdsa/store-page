import { root } from "./app.js";

const searchProduct = () => {

  const header = document.createElement('div');
  root.append(header);
  const searchInput = document.createElement('input');
  searchInput.className = 'search-bar';
  header.append(searchInput);
  searchInput.placeholder = 'search products here....';
  searchInput.type = 'text';
  const select_product_btn = document.querySelectorAll('.btns');
  searchInput.onchange = (e) => {
    if (e.target.value.toLowerCase() === 'dress') {
      select_product_btn[0].style.backgroundColor = 'red'; 
      select_product_btn[0].style.color = 'white';
    }
    if (e.target.value.toLowerCase() === 'jacket') {
      select_product_btn[1].style.backgroundColor = 'red'; 
      select_product_btn[1].style.color = 'white';
    }
    if (e.target.value.toLowerCase() === 'blouse') {
      select_product_btn[2].style.backgroundColor = 'red'; 
      select_product_btn[2].style.color = 'white';
    }
    if (e.target.value.toLowerCase() === 'shirt') {
      select_product_btn[3].style.backgroundColor = 'red'; 
      select_product_btn[3].style.color = 'white';
    }
  }
 }
export default searchProduct;
