import products from './products.js';
import fetchData from './fetchData.js';
import shoppingCartList from './shoppingCartList.js';

export const root = document.querySelector('.root');
export const container = document.createElement('div');

shoppingCartList();
root.append(container);
products();
products();
products();
products();
fetchData();

