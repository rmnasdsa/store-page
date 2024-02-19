
const fetchData = () => {
  const product_name = document.getElementsByClassName('product-name');
  // console.log(product_name);
  const product_cost = document.querySelectorAll('.product-cost');
  const product_description = document.querySelectorAll('.product-description');
  const getData = async () => {
    const data = await fetch('../src/data/data.json').then((response) => response.json());
    // console.log(data.products);
    data.products.map(({name, cost, des}) => {
      for (let p_name of product_name) {
        p_name.innerText = name;
      }
      for (let i = 0; i < 2; i++) {
        product_cost[i].innerText = cost;
        product_description[i].innerText = des;
      }
    })
    
  };
  getData();
  
}
export default fetchData;

