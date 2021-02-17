export default function Cart({ items }) {
  // console.log("Cart>>", items);
  return (
    <section>
      <section>
        <span style={{ padding: "1rem" }}>Product</span>
        <span style={{ padding: "1rem" }}>Price</span>
        <span>Quantity</span>
      </section>
      {items.reverse().map(({ id, product, price, quantity }) => {
        return (
          <section key={id}>
            <span style={{ padding: "1rem" }}>{product}</span>
            <span style={{ padding: "1rem" }}>{price}</span>
            <span>{quantity}</span>
          </section>
        );
      })}
    </section>
  );
}
