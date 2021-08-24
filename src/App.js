import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Card from "./Card";
import CartItem from './CartItem';
import { useState } from 'react';
function App() {
  const [products,setProduct] = useState([
    {
      id : 1,
      title : "Product 1",
      description : "loren",
      price : 20,
      addedToCart:false
    },
    {
      id : 2,
      title : "Product 2",
      description : "loren",
      price : 40,
      addedToCart:false
    },
    {
      id : 3,
      title : "Product 3",
      description : "loren",
      price : 90,
      addedToCart:false
    },
    {
      id : 4,
      title : "Product 4",
      description : "loren",
      price : 55,
      addedToCart:false
    },
    {
      id : 5,
      title : "Product 5",
      description : "loren",
      price : 100,
      addedToCart:false
    },
    {
      id : 6,
      title : "Product 6",
      description : "loren",
      price : 30,
      addedToCart:false
    },
    {
      id : 7,
      title : "Product 7",
      description : "loren",
      price : 85,
      addedToCart:false
    },
    {
      id : 8,
      title : "Product 8",
      description : "loren",
      price : 75,
      addedToCart:false
    },
    {
      id : 9,
      title : "Product 9",
      description : "loren",
      price : 80,
      addedToCart:false
    },
    {
      id : 10,
      title : "Product 10",
      description : "loren",
      price : 50,
      addedToCart:false
    }
  ])

  const [cartItems,setCartItem] = useState([]);
  const [total,setTotal] = useState(0)
  let addToCart = (id) => {
    let product = products.find(obj => obj.id == id);
    setCartItem([...cartItems,product]);
    setTotal(total + product.price);
    product.addedToCart=!product.addedToCart;
  }

  let removeItem = (id) => {
    let result = window.confirm("Are you sure do you want to remove?");
    if(result){
      let productIndex = products.findIndex(obj => obj.id == id);
      let cartIndex = cartItems.findIndex(obj => obj.id == id);
      setTotal(total - cartItems[cartIndex].price)
      cartItems.splice(cartIndex,1);
      setCartItem([...cartItems]);
      products[productIndex].addedToCart=!products[productIndex].addedToCart;
    }
  }

  return (
    <>
      <Header></Header>
      <div className="container" style={{ marginTop: '70px' }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {
                products.map((product) => {
                  return <Card data={product} handleCart={addToCart}/>
                })
              }
            </div>
          </div>
          <div className="col-lg-4">
            <ul className="list-group list-group-numbered">
              {
                cartItems.length == 0 ? <h3>No items in cart</h3> : null
              }
            {
              cartItems.map((item) => {
                  return <CartItem handleRemove={removeItem} data={item}/>
              })
            }
             <h1>Total - Rs {total}</h1>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
