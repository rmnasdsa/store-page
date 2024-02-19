
const fetchData = () => {
  const product_name = document.querySelector('.product-name');
  const product_cost = document.querySelector('.product-cost');
  const product_description = document.querySelector('.product-description');
  const getData = async () => {
    const data = await fetch('../src/data/data.json').then((response) => response.json());
    // console.log(data.products);
    data.products.map(({name, des, cost }) => {
      product_name.innerText = name;
      product_cost.innerText = cost;
      product_description.innerText = des;
    })
  };
  getData();
  
}
export default fetchData;

