import withLayout from 'hocs/withLayout';
import binIcon from '@assets/icons/trashbin.svg';
import useAppSelector from '@hooks/useAppSelector';
import useAppDispatch from '@hooks/useAppDispatch';
import {
  increaseQuantity,
  removeFromCart,
  decreaseQuantity,
  clearCart,
} from '@services/slices/cart';
import { formatToBRL } from '@utils/numbers';
import InputQuantity from '@components/InputQuantity';
import Button from '@components/Button';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '@routes/routes';
import * as S from './styles';
import { calculateTotalPrice } from './utils';
import EmptyCart from './components/EmptyCart';

function Cart() {
  const navigate = useNavigate();
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleDeleteButton = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseButton = (itemId: number) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseButton = (itemId: number) => {
    dispatch(decreaseQuantity(itemId));
  };

  const total = useMemo(() => calculateTotalPrice(items), [items]);

  const handleConfirmPurchase = () => {
    navigate(RoutesEnum.ShopEnd);
    dispatch(clearCart());
  };

  if (!items.length) return <EmptyCart />;

  return (
    <S.Container>
      <S.Grid>
        <S.Row>
          <S.Column columns={7}>
            <S.Heading>PRODUTO</S.Heading>
          </S.Column>

          <S.Column columns={2}>
            <S.Heading>QTD</S.Heading>
          </S.Column>

          <S.Column columns={2}>
            <S.Heading>SUBTOTAL</S.Heading>
          </S.Column>
          <S.Column columns={1} />
        </S.Row>

        {items.map((item) => (
          <S.Row key={item.id}>
            <S.Column columns={7}>
              <S.ContentWrapper>
                <S.Cover src={item.image} />
                <S.Details>
                  <S.Title>{item.title}</S.Title>
                  <S.Price>{formatToBRL(item.price)}</S.Price>
                </S.Details>
              </S.ContentWrapper>
            </S.Column>

            <S.Column columns={2}>
              <InputQuantity
                onIncrease={() => handleIncreaseButton(item.id)}
                onDecrease={() => handleDecreaseButton(item.id)}
                value={item.quantity}
              />
            </S.Column>

            <S.Column columns={2}>
              <S.Price>{formatToBRL(item.price * item.quantity)}</S.Price>
            </S.Column>

            <S.Column columns={1} justifyContent='flex-end'>
              <S.BinButton onClick={() => handleDeleteButton(item.id)}>
                <S.BinIcon src={binIcon} alt='Delete item' />
              </S.BinButton>
            </S.Column>
          </S.Row>
        ))}
      </S.Grid>
      <S.Footer>
        <S.ConfirmButtonWrapper>
          <Button onClick={handleConfirmPurchase}>FINALIZAR PEDIDO</Button>
        </S.ConfirmButtonWrapper>
        <S.TotalWrapper>
          <S.Heading>Total</S.Heading>
          <S.TotalPrice>{formatToBRL(total)}</S.TotalPrice>
        </S.TotalWrapper>
      </S.Footer>
    </S.Container>
  );
}

export default withLayout(Cart);
