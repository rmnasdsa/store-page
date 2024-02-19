import products from './products.js';
import fetchData from './fetchData.js';
export const root = document.querySelector('.root');
export const container = document.createElement('div');

root.append(container);
products();
products();
fetchData();

