import plusIcon from '@assets/icons/plusIcon.svg';
import minusIcon from '@assets/icons/minusIcon.svg';
import * as S from './styles';
import { InputQuantityProps } from './types.d';

function InputQuantity({
  value,
  onIncrease,
  onDecrease,
  onChange,
}: InputQuantityProps) {
  return (
    <S.Container>
      <S.Button onClick={onDecrease}>
        <img src={minusIcon} alt='Minus' />
      </S.Button>
      <S.Input type='number' value={value} onChange={onChange} />
      <S.Button onClick={onIncrease}>
        <img src={plusIcon} alt='Plus' />
      </S.Button>
    </S.Container>
  );
}

export default InputQuantity;
