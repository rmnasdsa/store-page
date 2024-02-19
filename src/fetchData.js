
const fetchData = () => {
  const product_name = document.getElementsByClassName('product-name');
  // console.log(product_name);
  const product_cost = document.querySelectorAll('.product-cost');
  const product_description = document.querySelectorAll('.product-description');
  const product_name_selected = document.querySelectorAll('.product-name-selected');
  const select_product_btn = document.querySelectorAll('.btns');
  const product_cost_selected = document.querySelectorAll('.product-cost-selected');
  const getData = async () => {
    const data = await fetch('../src/data/data.json').then((response) => response.json());
    // console.log(data.products);
    data.products.map(({name, cost, des, id}) => {
      // for (let p_name of product_name) {
      //   p_name.innerText = name;
      // }
      for (let i = 0; i < 4; i++) {
        if (id == 1) {
          product_cost[0].innerText = cost;
          product_name[0].innerText = name;
         
        }
        if (id == 2) {
          product_cost[1].innerText = cost;
          product_name[1].innerText = name;
        
        }
        if (id == 3) {
          product_cost[2].innerText = cost;
          product_name[2].innerText = name;
          
        }
        if (id == 4) {
          product_cost[3].innerText = cost;
          product_name[3].innerText = name;
          
        }
        
        product_description[i].innerText = des;


        select_product_btn[0].addEventListener('click', () => {
          if (id == 1) {
            product_name_selected[0].innerText = name;
            product_cost_selected[0].innerText = cost;
          }
        })
        select_product_btn[1].addEventListener('click', () => {
          if (id == 2) {
            product_name_selected[1].innerText = name;
            product_cost_selected[1].innerText = cost;
          }
        })
        select_product_btn[2].addEventListener('click', () => {
          if (id == 3) {
            product_name_selected[2].innerText = name;
            product_cost_selected[2].innerText = cost;
          }
        })
        select_product_btn[3].addEventListener('click', () => {
          if (id == 4) {
            product_name_selected[3].innerText = name;
            product_cost_selected[3].innerText = cost;
          }
        })
        
      }
    })
    
  };
  getData();
  
}
export default fetchData;

