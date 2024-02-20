
const fetchData = () => {
  const product_name = document.getElementsByClassName('product-name');
  // console.log(product_name);
  const product_cost = document.querySelectorAll('.product-cost');
  const product_description = document.querySelectorAll('.product-description');
  const product_name_selected = document.querySelectorAll('.product-name-selected');
  const select_product_btn = document.querySelectorAll('.btns');
  const product_cost_selected = document.querySelectorAll('.product-cost-selected');
  // const increase_btn = document.querySelectorAll('.increase-btn');
  // const decrease_btn = document.querySelectorAll('.decrease-btn');
  // const remove_btn = document.querySelectorAll('.remove-btn');
  // const shopping_cart_item = document.querySelectorAll('.shopping-cart-item')
  const display = document.querySelectorAll('.display');
  const number_of_product = document.querySelectorAll('.number-of-product');
  // console.log(display);
  let count = 1;
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
            number_of_product[0].innerText = `${count}# `;
            display[0].style.display = 'inline-block';
            display[1].style.display = 'inline-block';
            display[2].style.display = 'inline-block';
          }
        })
        select_product_btn[1].addEventListener('click', () => {
          if (id == 2) {
            product_name_selected[1].innerText = name;
            product_cost_selected[1].innerText = cost;
            number_of_product[1].innerText = `${count}# `;
            display[3].style.display = 'inline-block';
            display[4].style.display = 'inline-block';
            display[5].style.display = 'inline-block';
          }
        })
        select_product_btn[2].addEventListener('click', () => {
          if (id == 3) {
            product_name_selected[2].innerText = name;
            product_cost_selected[2].innerText = cost;
            number_of_product[2].innerText = `${count}# `;
            display[6].style.display = 'inline-block';
            display[7].style.display = 'inline-block';
            display[8].style.display = 'inline-block';
          }
        })
        select_product_btn[3].addEventListener('click', () => {
          if (id == 4) {
            product_name_selected[3].innerText = name;
            product_cost_selected[3].innerText = cost;
            number_of_product[3].innerText = `${count}# `;
            display[9].style.display = 'inline-block';
            display[10].style.display = 'inline-block';
            display[11].style.display = 'inline-block';
          }
        })
        
      }
    })
    
  };
  getData();
  
}
export default fetchData;

