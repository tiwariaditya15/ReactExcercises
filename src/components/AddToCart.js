import { useState } from "react";
import Cart from "./Cart";

const products = [
  {
    id: "1",
    product: "monitor",
    price: "10K",
    quantity: 1
  },
  {
    id: "2",
    product: "keyboard",
    price: "3K",
    quantity: 1
  },
  {
    id: "3",
    product: "Processor",
    price: "31K",
    quantity: 1
  },
  {
    id: "4",
    product: "mouse",
    price: "2.56K",
    quantity: 1
  }
];
export default function AddToCart({}) {
  const [cart, setCart] = useState([]);
  const handleClick = (e, id) => {
    // if (cartWithId) {
    //   let restCartItems = cart.filter((product) => product.id !== id);
    //   // console.log(cartWithId, ...restCartItems);
    //   cartWithId["quantity"] = ++cartWithId["quantity"];
    //   setCart([...restCartItems, cartWithId]);
    // } else {
    //   let [product] = products.filter((product) => product.id === id);
    //   setCart([...cart, product]);
    // }

    let [cartWithId] = cart.filter((product) => product.id === id);
    if (cartWithId) {
      setCart(
        cart.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1
            };
          }
          return {
            ...product
          };
        })
      );
    } else {
      const [product] = products.filter((product) => product.id === id);
      setCart([...cart, product]);
    }
  };
  console.log(cart);
  return (
    <div>
      <section>
        {products.map(({ id, product, price }) => {
          return (
            <section
              onDoubleClick={(e) => handleClick(e, id)}
              style={{ cursor: "pointer" }}
            >
              <p
                style={{
                  padding: "1rem",
                  backgroundColor: "#F9FAFB",
                  margin: "16px auto"
                }}
              >
                {product.toUpperCase()} ({price})
                <span
                  style={{
                    padding: "1 rem",
                    marginLeft: "48px"
                  }}
                >
                  <button onClick={(e) => handleClick(e, id)}>+</button>
                </span>
              </p>
            </section>
          );
        })}
      </section>
      <br />
      <br />
      <Cart items={cart} />
    </div>
  );
}
