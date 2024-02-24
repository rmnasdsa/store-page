import products from './productsConstructure.js';
import fetchData from './fetchData.js';
import shoppingCartList from './shoppingCartList.js';
import calculate from './calculate.js';

export const root = document.querySelector('.root');
export const container = document.createElement('div');
container.className = 'container';

root.append(container);
products();
// products();
// products();
// products();
shoppingCartList('shopping-cart-list');
// shoppingCartList();
// shoppingCartList();
// shoppingCartList();
calculate();
fetchData();


