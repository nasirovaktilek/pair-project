import React, { useContext, useEffect } from "react";
import { cartContext } from "../../Context/CartContext";
// import { calcTotalPrice } from "../../helpers/cartFunctions";

const Cart = () => {
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);
  console.log(cart.totalPrice);
  return (
    <div
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   marginTop: "70px",
    //   // width: "800px",
    // }}
    >
      <table>
        <thead>
          <tr style={{ fontSize: "20px", marginBottom: "50px" }}>
            <th>Фото</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма продукта</th>
          </tr>
        </thead>
        <tbody>
          {cart.products
            ? cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <img width={200} src={elem.item.image} alt={elem.item.name} />
                  </td>
                  <td
                  // style={{
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   marginTop: "40px",
                  // }}
                  >
                    {elem.item.name}
                  </td>
                  <td
                  // style={{
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   marginTop: "40px",
                  // }}
                  >
                    {elem.item.price}
                  </td>
                  <td
                  // style={{
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   marginTop: "40px",
                  // }}
                  >
                    <input
                      type="number"
                      value={elem.count}
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                  <td>
                    <button onClick={() => deleteCartProduct(elem.item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>

      <h4>Общая сумма: {cart.totalPrice}</h4>
      <button>Заказать</button>
    </div>
  );
};

export default Cart;
