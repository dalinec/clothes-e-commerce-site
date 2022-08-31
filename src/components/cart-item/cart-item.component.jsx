import { CartItemContainer, ItemDetails } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, qty, price, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {qty} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
