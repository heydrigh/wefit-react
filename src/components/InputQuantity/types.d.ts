export interface InputQuantityProps {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
