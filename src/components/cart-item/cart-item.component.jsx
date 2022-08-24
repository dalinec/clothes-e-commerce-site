import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, qty } = cartItem;

  return (
    <div>
      <h2>{name}</h2>
      <span>{qty}</span>
    </div>
  );
};
export default CartItem;
