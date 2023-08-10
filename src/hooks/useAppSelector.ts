import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '@services/slices/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
